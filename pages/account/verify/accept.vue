<template>
    <div class="flex min-h-[100vh] items-center justify-center">
        <div v-if="error">{{ error }}</div>
        <div v-else>Verifying...</div>
    </div>
</template>
<script>
    export default {
        auth: false,

        middleware({ $auth, redirect }) {
            if (!$auth.loggedIn) {
                return redirect('/login');
            }

            if ($auth.loggedIn && $auth.user.email_verified_at) {
                return redirect('/');
            }
        },

        validate({ query }) {
            return !!query.token;
        },

        data() {
            return {
                error: null,
            };
        },

        async mounted() {
            try {
                await this.$axios.get(this.$route.query.token);
                await this.$auth.fetchUser();
                this.$router.push('/');
            } catch {
                this.error = 'Verification link is invalid or expired.';
            }
        },
    };
</script>
