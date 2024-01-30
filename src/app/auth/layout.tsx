'use client';

//FIXME (Next.js 14.1) 'useState' is not exported from 'react' (imported as 'useState').
//TODO works here
import { AuthProvider, AuthProviderProps } from 'react-oidc-context';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    /*
     * Keycloak server.
     */
    const oidcConfig: AuthProviderProps = {
        //dummy setup
        authority: 'https://dummy-server.com',
        client_id: 'web-xyz',
        redirect_uri: `${typeof location !== 'undefined' ? location.protocol:'https'}//localhost:3000/tests/auth?redirect=true`
    };

    return (
        <AuthProvider {...oidcConfig}>
            {children}
        </AuthProvider>
    );
}
