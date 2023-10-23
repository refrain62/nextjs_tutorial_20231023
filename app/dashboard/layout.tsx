export default function DashboardLayout({
    children,   // will be apage or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <navi></navi>

            {children}
        </section>
    )
}