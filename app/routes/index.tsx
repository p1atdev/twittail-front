import { ActionFunction, LoaderFunction, redirect } from "@remix-run/cloudflare"
import { Form, useActionData, useLoaderData } from "@remix-run/react"
import { User } from "types/user"
import UserDetail from "~/components/detail"
import TwittailForm from "~/components/form"
// import { fetchUser } from "~/utils/user"

type ActionData = {
    user: User
}

// export const loader: LoaderFunction = async () => {
//     const start = new Date()

//     // キャッシュを取得
//     const message = await Twittail_KV.get("cache-key", "text")

//     // KVにキャッシュが存在するならそれを返す
//     if (message) {
//         const end = new Date()

//         return {
//             message: message,
//             fromKV: true,
//             time: end.getMilliseconds() - start.getMilliseconds(),
//         }
//     }

//     // キャッシュがなかったのでフェッチ
//     const res = await fetch("https://twittail.deno.dev")
//     const body = await res.text()

//     // 次回のリクエストのためにKVに保存
//     // expirationTtlを指定することで60秒後にキャッシュをクリアする
//     await Twittail_KV.put("cache-key", body, { expirationTtl: 60 })

//     const end = new Date()

//     return {
//         message: body,
//         fromKV: false,
//         time: end.getMilliseconds() - start.getMilliseconds(),
//     }
// }

export const action: ActionFunction = async ({ request }) => {
    const body = await request.formData()

    const userId = body.get("userId")

    return redirect(`/${userId}`)
}

export default function Index() {
    return (
        <>
            <main className="m-10 ">
                <TwittailForm />

                <UserDetail user={undefined} />
            </main>
        </>
    )
}
