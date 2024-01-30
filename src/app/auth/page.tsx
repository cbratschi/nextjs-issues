import Header from "../_components/header";
import AuthState from "./_components/auth-state";

/**
 * Auth test case.
 *
 * @returns
 */
export default function Auth() {
    return (
        <Header lang="en">
            <AuthState />
        </Header>
    );
}
