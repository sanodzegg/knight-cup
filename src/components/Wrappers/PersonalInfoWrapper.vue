<script>
    import PersonalImgComp from './PersonalComps/PersonalImgComp.vue';
    import PersonalFormComp from './PersonalComps/PersonalFormComp.vue';
    export default {
        components: {
            PersonalImgComp,
            PersonalFormComp
        },
        data() {
            return {
                current: 1,
                active: 0
            }
        }
    }
</script>
<template>
    <div class="personalInfoWrapper">
        <PersonalImgComp />
        <PersonalFormComp />
    </div>
</template>

<style>
    @import url(./Wrappers.css);
</style>