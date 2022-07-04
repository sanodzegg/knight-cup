<script>
    import { mapActions, mapGetters } from 'vuex';
    export default {
        mounted: function() {
            sessionStorage.clear();

            this.sendData(this.displayData);
        },
        computed: {
            ...mapGetters(["displayData"])
        },
        methods: {
            ...mapActions(["sendData"])
        }
    }
</script>
<template>
    {{ displayData }}
</template>