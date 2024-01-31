import ServerLifecycleTest from "../../_components/lifecycle";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}

            <h2>Client Component in Page Layout</h2>
            <p>FIXME gets remounted during path changes!</p>
            <ServerLifecycleTest />
        </>
    );
}
