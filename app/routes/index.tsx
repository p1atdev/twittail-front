import { ActionFunction, LoaderFunction, MetaFunction, redirect } from "@remix-run/cloudflare"
import { Form, useActionData, useLoaderData } from "@remix-run/react"
import { User } from "types/user"
import UserDetail from "~/components/detail"
import TwittailForm from "~/components/form"

export const action: ActionFunction = async ({ request }) => {
    const body = await request.formData()

    const userId = body.get("userId")

    return redirect(`/${userId}`)
}

export const meta: MetaFunction = () => ({
    title: "Twitter のユーザーの詳細情報を確認",
    description:
        "フォロー数やファボ数から、リストに入れられている数など、通常は見れないような情報も確認することができます",
    "og:image": "https://twittail.p1atdev.workers.dev/twittail.png",
    "og:url": "https://twittail.p1at.dev/",
})

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
