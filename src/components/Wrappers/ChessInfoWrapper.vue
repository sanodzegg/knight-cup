<script>
    import ChessImgComp from "./ChessComps/ChessImgComp.vue";
    import ChessFormComp from './ChessComps/ChessFormComp.vue';
    export default {
        components: {
            ChessImgComp,
            ChessFormComp
        },
    }
</script>
<template>
    <div class="chessInfoWrapper">
        <ChessImgComp />
        <ChessFormComp />
    </div>
</template>

<style>
    @import url(./Wrappers.css);
</style>