<template>
    <div>
        <h1 class="text-center text-5xl">Forgot Password</h1>
        <form type="post" class="mx-auto mt-10 max-w-xs" @submit.prevent="forgotPassword()">
            <div>
                <label>Email</label>
                <input v-model="params.email" type="text" class="form-input" />
            </div>
            <div class="text-right">
                <button type="submit" class="btn btn-green">Forgot Password</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        auth: 'guest',

        data() {
            return {
                params: {
                    email: '',
                },
            };
        },

        methods: {
            async forgotPassword() {
                try {
                    await this.$axios.post('/auth/password/forgot', this.params);
                } catch {}
            },
        },
    };
</script>
