<template>
    <div>
        <h1 class="text-center text-5xl">Reset Password</h1>
        <form type="post" class="mx-auto mt-10 max-w-xs" @submit.prevent="resetPassword()">
            <div>
                <label>Password</label>
                <input v-model="params.password" type="text" class="form-input" />
            </div>
            <div>
                <label>Confirm Password</label>
                <input v-model="params.password_confirmation" type="text" class="form-input" />
            </div>
            <div class="text-right">
                <button type="submit" class="btn btn-green">Reset Password</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        validate({ query }) {
            return !!query.token;
        },

        auth: 'guest',

        data() {
            return {
                params: {
                    password: '11111111',
                    password_confirmation: '11111111',
                },
            };
        },

        methods: {
            async resetPassword() {
                try {
                    await this.$axios.post(this.$route.query.token, this.params);
                    this.$router.push('/login');
                } catch {}
            },
        },
    };
</script>
