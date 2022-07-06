<script>
    import CompleteWrapper from '@/components/Wrappers/CompleteWrapper.vue';
    export default {
        data() {
            return {
                personalData: Object,
                chessData: Object,
                finalData: Object,
            };
        },
        mounted: function () {
            this.personalData = JSON.parse(sessionStorage.getItem("KC-personalInfo"));
            this.chessData = JSON.parse(sessionStorage.getItem("KC-chessInfo"));

            sessionStorage.clear();
            this.finalData = {
                ...this.personalData,
                ...this.chessData
            };
            console.log(this.finalData);
        },
        components: { CompleteWrapper }
    }
</script>
<template>
    <CompleteWrapper />
</template>