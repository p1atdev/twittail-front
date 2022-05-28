import { User } from "types/user"

export const fetchUser = async (userId: string): Promise<User> => {
    // キャッシュを取得
    const cachedUser = await Twittail_KV.get(`@${userId}`, "json")

    // KVにキャッシュが存在するならそれを返す
    if (typeof cachedUser === "string") {
        return JSON.parse(cachedUser)
    }

    // キャッシュがなかったのでフェッチ
    const res = await fetch(`https://twittail.deno.dev/v1/${userId}`)
    const user = await res.text()

    // 次回のリクエストのためにKVに保存
    // expirationTtlを指定することで60秒後にキャッシュをクリアする
    await Twittail_KV.put(`@${userId}`, user, { expirationTtl: 60 })

    return JSON.parse(user)
}
