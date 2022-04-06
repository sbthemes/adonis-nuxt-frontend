<template>
    <div>
        <div>{{ $auth.user }}</div>
        <button type="button" @click="$auth.logout()">Logout</button>
    </div>
</template>

<script>
    export default {
        name: 'IndexPage',

        middleware: 'email-verified',
    };
</script>
