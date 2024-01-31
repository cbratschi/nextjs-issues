'use client';

import { useEffect } from 'react';

let version = 0;

/**
 * Client component lifecycle tests.
 *
 * @param param0
 * @returns
 */
export default function ClientLifecycleTest() {
    useEffect(() => {
        const localVersion = version++;

        //log
        console.log(`Created component: ${localVersion}`);

        return () => {
            //log
            console.log(`Destroyed component: ${localVersion}`);
        };
    }, []);

    return (
        <p>
            Version: {version}
        </p>
    );
}