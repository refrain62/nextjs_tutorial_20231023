import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Next.js titile'
}

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
    return <h1>Hello, Dashboard Pgae!</h1>
}