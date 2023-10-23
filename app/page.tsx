'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

// `app/page.tsx` is the UI for the '/' URL
export default function Page() {
    const router = useRouter()

    return (
        <>
            <h1>Hello, Next.js!</h1>
            <Link href="/dashboard" scroll={false}>
                Dashboard by LinkTag
            </Link>
            <br />
            <button
                type="button"
                onClick={() => router.push('/dashboard')}>
                    Dashboard by router.push
                </button>
        </>
    )
}
