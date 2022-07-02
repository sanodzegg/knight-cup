<script>
    export default {
        props: {
            step: String
        }
    }
</script>

<template>
    <div class="navigationWrapper">
        <p>{{ step }}</p>
    </div>
</template>

<style>
    @import url(./HeaderSnack.css);
</style>