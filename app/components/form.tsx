import { Form, Link, useNavigate } from "@remix-run/react"

const TwittailForm = () => {
    return (
        <>
            <div className="hero-content text-center">
                <div className="max-w-lg">
                    <h1 className="text-5xl font-bold">
                        <a href="/">Twittail</a>
                    </h1>

                    <p className="py-6">
                        ユーザーの詳細情報を調べることができます。アイコン画像の高画質なURLやツイート数などの基本的な情報から、リストに入れられている数などの特殊な情報までも見ることができます。
                    </p>
                    <Form className="flex gap-x-2" method="post">
                        <div className="form-control w-full">
                            <label className="input-group input-group-md">
                                <span>@</span>
                                <input
                                    type="text"
                                    placeholder="Twitter"
                                    name="userId"
                                    className="input input-bordered w-full input-md"
                                />
                            </label>
                        </div>

                        <button className="btn btn-primary btn-md mx-2" type="submit">
                            Go
                        </button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default TwittailForm
