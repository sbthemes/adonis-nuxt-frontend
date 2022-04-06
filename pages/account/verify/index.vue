<template>
    <div class="text-center">
        <h1 class="text-5xl">Verify your email</h1>
        <div class="mt-10">
            <button class="btn btn-green" @click="resend()">Resend</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AccountVerifyPage',

        auth: false,

        middleware({ $auth, redirect }) {
            if (!$auth.loggedIn) {
                return redirect('/login');
            }
            if ($auth.loggedIn && $auth.user.email_verified_at) {
                return redirect('/');
            }
        },

        methods: {
            async resend() {
                try {
                    await this.$axios.post('/auth/email/verify/resend');
                } catch {}
            },
        },
    };
</script>
