import type { MetaFunction } from "@remix-run/cloudflare"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"
import styles from "./styles/app.css"

export function links() {
    return [{ rel: "stylesheet", href: styles }]
}

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Twittail",
    viewport: "width=device-width,initial-scale=1",
    "og:site_name": "Twittail",
    "og:type": "website",
    "twitter:card": "summary",
})

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}
