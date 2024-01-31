import Link from "next/link";
import ServerLifecycleTest from "../../_components/lifecycle";

/**
 * Page properties.
 */
interface PageProps {
    params: {
        /**
         * Language.
         */
        lang: string,

        /**
         * Slug.
         */
        slug: string[] | undefined
    }
}

/**
 * Page.
 *
 * @param param0
 * @returns
 */
export default async function Page({
    params: {
        lang,
        slug
    }
}: PageProps) {
    return (
        <>
            <h1>Page: {slug}</h1>
            <p>Language: {lang}</p>

            <h2>Links</h2>
            <ul>
                <li><Link href='/en/a'>/en/a</Link></li>
                <li><Link href='/en/b'>/en/b</Link></li>
                <li><Link href='/en/c'>/en/c</Link></li>
            </ul>

            <h2>Client Component</h2>
            <p>FIXME gets remounted during path changes!</p>
            <ServerLifecycleTest />
        </>
    );
}