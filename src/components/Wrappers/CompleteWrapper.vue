<script>
import CompleteImgComp from './CompleteComps/CompleteImgComp.vue';
import CompleteDoneComp from './CompleteComps/CompleteDoneComp.vue';

    export default {
    components: { CompleteImgComp, CompleteDoneComp }
}
</script>
<template>
    <div class="completeWrapper">
        <CompleteImgComp />
        <CompleteDoneComp />
    </div>
</template>