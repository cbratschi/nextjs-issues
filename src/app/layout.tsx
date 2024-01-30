/**
 * Navigation layout properties (navbar, footer).
 */
interface NavLayoutProps {
    children: React.ReactNode
}

/**
 * Navigation layout (navbar & footer).
 *
 * @param param0
 * @returns
 */
export default async function NavLayout({
    children
}: NavLayoutProps) {
    //no content
    return (
        <>
            {children}
        </>
    );
}