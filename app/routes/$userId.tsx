import { ActionFunction, LoaderFunction, MetaFunction, redirect } from "@remix-run/cloudflare"
import { Form, Links, Meta, Scripts, useActionData, useCatch, useLoaderData } from "@remix-run/react"
import { User } from "types/user"
import UserDetail from "~/components/detail"
import TwittailForm from "~/components/form"
import { fetchUser } from "~/utils/user"

type LoaderData = {
    user: User
}

export const loader: LoaderFunction = async (request) => {
    const userId = request.params.userId

    try {
        const user = await fetchUser(`${userId}`)

        return {
            user: user,
        }
    } catch {
        throw new Response("Not Found", {
            status: 404,
        })
    }
}

export const action: ActionFunction = async ({ request }) => {
    const body = await request.formData()

    const userId = body.get("userId")

    return redirect(`/${userId}`)
}

export const meta: MetaFunction = ({ data }: { data: LoaderData | undefined }) => {
    if (!data) {
        return {
            title: "No User",
            description: "User not found",
        }
    }
    return {
        title: `"${data.user.profile.userName}" の Twitter ユーザー情報`,
        description: `"${data.user.profile.userName}" の詳細な Twitter ユーザー情報を見ることができます`,
        "og:image": data.user.avatar.url,
        "og:url": `https://twittail.p1at.dev/${data.user.profile.userName}`,
    }
}

export default function Page() {
    const { user } = useLoaderData<LoaderData>()

    return (
        <>
            <main className="m-10">
                <TwittailForm />

                <UserDetail user={user} />
            </main>
        </>
    )
}

export function CatchBoundary() {
    return (
        <main className="m-10">
            <TwittailForm />

            <div className="alert shadow-md">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-info flex-shrink-0 w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span>ユーザーが存在しません</span>
                </div>
            </div>

            <UserDetail user={undefined} />
        </main>
    )
}
