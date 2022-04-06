<template>
    <div>
        <h1 class="text-5xl text-center">Register</h1>
        <form type="post" class="mt-10 max-w-xs mx-auto" @submit.prevent="register()">
            <div>
                <label>Name</label>
                <input v-model="params.name" type="text" class="form-input" />
            </div>
            <div>
                <label>Email</label>
                <input v-model="params.email" type="text" class="form-input" />
            </div>
            <div>
                <label>Password</label>
                <input v-model="params.password" type="text" class="form-input" />
            </div>
            <div class="text-right">
                <button type="submit" class="btn">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'RegisterPage',

        auth: 'guest',

        data() {
            return {
                params: {
                    email: '',
                    password: '',
                    password_confirmation: '',
                },
            };
        },
        methods: {
            async register() {
                try {
                    await this.$axios.post(`/auth/register`, this.params);
                    await this.$auth.loginWith('local', {
                        data: {
                            email: this.params.email,
                            password: this.params.password,
                        },
                    });
                } catch {}
            },
        },
    };
</script>
