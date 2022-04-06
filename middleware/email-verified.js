export default function ({ $auth, redirect }) {
    if ($auth.loggedIn && !$auth.user.email_verified_at) {
        return redirect('/account/verify');
    }
}
