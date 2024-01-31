import ServerLifecycleTest from "../_components/lifecycle";

export default function LangLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}

            <h2>Client Component in Lang Layout</h2>
            <ServerLifecycleTest />
        </>
    );
}