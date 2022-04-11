<template>
    <div>
        <div>{{ $auth.user }}</div>
        <button type="button" @click="$auth.logout()">Logout</button>
    </div>
</template>

<script>
    export default {
        middleware: 'email-verified',
    };
</script>
