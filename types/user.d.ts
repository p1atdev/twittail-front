export type User = {
    /**
     * プロフィール
     */
    profile: Profile

    /**
     * ユーザーアバター
     */
    avatar: Avatar

    /**
     * バナー
     */
    banner: Banner
}

/**
 * ユーザーアイコンに関する情報
 */
export type Avatar = {
    /**
     * アイコン画像URL
     */
    url: string

    /**
     * デフォルトのアイコン画像か
     */
    isDefaultIcon: boolean

    /**
     * NFT?
     */
    isNFT: boolean
}

/**
 * バナーに関する情報
 */
export type Banner = {
    /**
     * バナー画像のurl
     */
    url: string
}

/**
 * ユーザーに関する情報
 */
export type Profile = {
    /**
     * ユーザー名
     */
    userName: string

    /**
     * `@`から始まるユーザーid
     */
    userId: string

    /**
     * 数字だけのid
     */
    userRestId: string

    /**
     * bioとかの説明文章
     */
    description: string

    /**
     * ユーザープロフィールのurl
     */
    profileUrl: string

    /**
     * webサイトリンクをつけてるときのurl
     */
    website: WebSite

    /**
     * 認証済みか
     */
    isVerified: boolean

    /**
     * フォロワーの数
     */
    followersCount: number

    /**
     * 早い時期からのフォロワーの数？
     */
    fastFollowersCount: number

    /**
     * 通常のフォロワーの数
     */
    normalFollowersCount: number

    /**
     * ファボの数
     */
    favouritesCount: number

    /**
     * フォロー
     */
    followsCount: number

    /**
     * 住所に設定されてる文字列
     */
    location: string

    /**
     * メディア数
     */
    mediaCount: number

    /**
     * リストに入れられている数
     */
    listedCount: number

    /**
     * 翻訳者か
     */
    isTranslator: boolean

    /**
     * 翻訳者のタイプ
     */
    translatorType: string

    /**
     * カスタムタイムラインを持っているか
     */
    hasCustomTimelines: boolean

    /**
     * 作成日時
     */
    createdAt: string

    /**
     * ピン留めしているツイートのid
     * 基本的に一つで、設定されてなければ空
     */
    pinnedTweetIds: string[]

    /**
     * 鍵垢か
     */
    isProtected: boolean
}

export type WebSite = {
    /**
     * 表示上のurl
     */
    displayUrl: string

    /**
     * httpsとかがついたurl
     */
    expandedUrl: string

    /**
     * 短縮url
     */
    shortenedUrl: string
}
