import ServerLifecycleTest from "@/app/_components/lifecycle";
import Link from "next/link";

/**
 * Page properties.
 */
interface PageProps {
    params: {
        /**
         * Language.
         */
        lang: string,
    }
}

/**
 * Page.
 *
 * @param param0
 * @returns
 */
export default async function Lang({
    params: {
        lang
    }
}: PageProps) {
    return (
        <>
            <h1>Language: {lang}</h1>

            <h2>Links</h2>
            <ul>
                <li><Link href='/test/en'>/test/en</Link></li>
                <li><Link href='/test/de'>/test/de</Link></li>
                <li><Link href='/test/fr'>/test/fr</Link></li>
            </ul>

            <h2>Client Component</h2>
            <ServerLifecycleTest />
        </>
    );
}