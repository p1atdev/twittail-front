import { User } from "types/user"
import { parse, format } from "date-fns"

type Props = {
    user?: User
}

const UserDetail = ({ user }: Props) => {
    return (
        <>
            <div className="mx-auto my-10 max-w-4xl">
                <div className="flex gap-x-4">
                    <div className="flex flex-col items-center gap-y-1">
                        <div className="avatar">
                            <div className="w-24">
                                <img src={user?.avatar.url ?? ""} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">{user?.profile.userName ?? "ユーザー名"}</p>
                        <p className="">@{user?.profile.userId ?? "user_id"}</p>
                        <p>Rest ID: {user?.profile.userRestId ?? "000000"}</p>
                    </div>
                </div>

                <div className="py-4">
                    <p className="text-2xl font-bold">アイコン画像</p>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <tbody>
                                <tr>
                                    <td>高画質URL</td>
                                    <td>
                                        <a className="link link-primary" href={user ? user.avatar.url : ""}>
                                            {user?.avatar.url ?? "アイコン画像の高画質URL"}
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>デフォルトアイコン？</td>
                                    <td>{user?.avatar.isDefaultIcon ? "Yes" : "No"}</td>
                                </tr>
                                <tr>
                                    <td>NFTアイコン？</td>
                                    <td>{user?.avatar.isNFT ? "Yes" : "No"}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="py-4">
                    <p className="text-2xl font-bold">バナー画像</p>

                    <img src={user?.banner.url ?? ""} />
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <tbody>
                                <tr>
                                    <td>URL</td>
                                    <td>
                                        <a className="link link-primary" href={user?.banner.url ?? ""}>
                                            {user?.banner.url ?? "バナー画像のURL"}
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="py-4">
                    <p className="text-2xl font-bold">プロフィール</p>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <tbody>
                                <tr>
                                    <td>ユーザー名</td>
                                    <td>{user?.profile.userName ?? "ユーザー名"}</td>
                                </tr>
                                <tr>
                                    <td>ユーザーID</td>
                                    <td>@{user?.profile.userId ?? " から始まるID"}</td>
                                </tr>
                                <tr>
                                    <td>Rest ID</td>
                                    <td>{user?.profile.userRestId ?? "Rest IDという内部での識別ID"}</td>
                                </tr>
                                <tr>
                                    <td>非公開アカウント</td>
                                    <td>{user?.profile.isProtected ? "Yes" : "No"}</td>
                                </tr>
                                <tr>
                                    <td>認証済み</td>
                                    <td>{user?.profile.isVerified ? "Yes" : "No"}</td>
                                </tr>
                                <tr>
                                    <td>プロフィールリンク</td>
                                    <td>
                                        <a className="link link-primary" href={user?.profile.profileUrl ?? ""}>
                                            {user?.profile.profileUrl ?? "ユーザープロフィールへの短縮リンク"}
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>登録日</td>
                                    <td>
                                        {user?.profile.createdAt
                                            ? format(
                                                  parse(
                                                      user.profile.createdAt,
                                                      "E MMM dd HH:mm:ss xx yyyy",
                                                      new Date()
                                                  ),
                                                  "yyyy/MM/dd"
                                              )
                                            : "yyyy/MM/dd"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>説明文</td>
                                    <td>{user?.profile.description ?? "説明文、bioと言われるやつ"}</td>
                                </tr>
                                <tr>
                                    <td>場所</td>
                                    <td>{user?.profile.location ?? "場所、住所"}</td>
                                </tr>
                                <tr>
                                    <td>Webサイト(展開)</td>
                                    <td>
                                        <a className="link link-primary" href={user?.profile.website.expandedUrl ?? ""}>
                                            {user?.profile.website.expandedUrl ?? "展開された(実際の)URL"}
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Webサイト(短縮)</td>
                                    <td>
                                        <a
                                            className="link link-primary"
                                            href={user?.profile.website.shortenedUrl ?? ""}
                                        >
                                            {user?.profile.website.shortenedUrl ?? "Twitterによって短縮されたURL"}
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="py-4">
                    <p className="text-2xl font-bold">フォロー・フォロワー</p>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <tbody>
                                <tr>
                                    <td>フォロー数</td>
                                    <td>{user?.profile.followsCount ?? "フォローの数"}</td>
                                </tr>
                                <tr>
                                    <td>フォロワー数</td>
                                    <td>{user?.profile.followersCount ?? "フォロワーの数"}</td>
                                </tr>
                                <tr>
                                    <td>fastFollowersCount</td>
                                    <td>
                                        {user?.profile.fastFollowersCount ??
                                            "fastFollowersCount。謎なので詳しい人教えてください"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>normalFollowersCount</td>
                                    <td>{user?.profile.normalFollowersCount ?? "normalFollowersCount"}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="py-4">
                    <p className="text-2xl font-bold">ツイート</p>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <tbody>
                                <tr>
                                    <td>ツイート数</td>
                                    <td>🚧</td>
                                </tr>
                                <tr>
                                    <td>お気に入り数</td>
                                    <td>{user?.profile.favouritesCount ?? "いわゆるファボした数"}</td>
                                </tr>
                                <tr>
                                    <td>ピン留めツイート</td>
                                    <td>
                                        {user ? user.profile.pinnedTweetIds[0] ?? "なし" : "ピン留めされたツイートのID"}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="py-4">
                    <p className="text-2xl font-bold">特殊</p>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <tbody>
                                <tr>
                                    <td>翻訳者？</td>
                                    <td>{user?.profile.isTranslator ? "Yes" : "No"}</td>
                                </tr>
                                <tr>
                                    <td>翻訳者タイプ</td>
                                    <td>{user?.profile.translatorType ?? "翻訳者のタイプ"}</td>
                                </tr>
                                <tr>
                                    <td>カスタムタイムラインを持っている？</td>
                                    <td>{user?.profile.hasCustomTimelines ? "Yes" : "No"}</td>
                                </tr>
                                <tr>
                                    <td>リストに入れられている数</td>
                                    <td>{user?.profile.listedCount ?? "リストに入れられている数"}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetail
