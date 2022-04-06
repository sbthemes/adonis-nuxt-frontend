<template>
    <div>
        <h1 class="text-5xl text-center">Login</h1>
        <form type="post" class="mt-10 max-w-xs mx-auto" @submit.prevent="login()">
            <div>
                <label>Email</label>
                <input v-model="params.email" type="text" class="form-input" />
            </div>
            <div>
                <label>Password</label>
                <input v-model="params.password" type="text" class="form-input" />
            </div>
            <div class="flex items-center justify-between">
                <nuxt-link to="/forgot-password">Forgot Password</nuxt-link>
                <button type="submit" class="btn">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'LoginPage',

        auth: 'guest',

        data() {
            return {
                params: {
                    email: '',
                    password: '',
                },
            };
        },
        methods: {
            async login() {
                try {
                    await this.$auth.loginWith('local', { data: this.params });
                } catch {}
            },
        },
    };
</script>
