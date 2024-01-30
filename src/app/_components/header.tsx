/**
 * Header properties.
 */
interface HeaderProps {
    children: React.ReactNode
    lang: string
}

/**
 * Page header.
 *
 * @param param0
 * @returns
 */
export default async function Header({
    children,
    lang
}: HeaderProps) {
    return (
        <html lang={lang}>
            <body>
                {children}
            </body>
        </html>
    );
}