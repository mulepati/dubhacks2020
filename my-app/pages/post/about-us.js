import Link from 'next/link'

export default function GiveAboutUs() {
    return (<div>
            <h1>About Hobify</h1>
            <p>Wanting to find a new hobby during quarantine? Looking for a new community to help start out? Join Hobify a community based app that helps you find 
                hobbies and people to help you get started.
            </p>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </div>
    )
}