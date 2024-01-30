'use client';

import { useAuth } from 'react-oidc-context';

/**
 * Login button.
 *
 * @returns
 */
function LogInButton() {
    const auth = useAuth();

    return (
        <button
            className="btn btn-primary"
            onClick={() => void auth.signinRedirect()}
        >Log in</button>
    );
}

/**
 * Handle authentication state.
 *
 * @returns
 */
export default function AuthState() {
    const auth = useAuth();

    //check state transition
    switch (auth.activeNavigator) {
        case 'signinSilent':
            return (
                <div>Signing you in...</div>
            );

        case 'signoutRedirect':
            return (
                <div>Signing you out...</div>
            );
    }

    //check loading
    if (auth.isLoading) {
        return (
            <div>Loading...</div>
        );
    }

    //check errors
    if (auth.error) {
        //log
        console.dir(auth.error);

        return (
            <div>
                Oops... {auth.error.message}
                <br />
                <LogInButton />
            </div>
        );
    }

    if (auth.isAuthenticated) {
        const user = auth.user;

        if (!user) {
            return (
                <div>User missing.</div>
            );
        }

        //debug
        console.dir(user);

        return (
            <div>
                Hello {user.profile.name} ({user.profile.sub}).
                <br />
                <button
                    className="btn btn-primary"
                    onClick={() => void auth.removeUser()}
                >Log out</button>
            </div>
        );
    }

    return (
        <LogInButton />
    );
}