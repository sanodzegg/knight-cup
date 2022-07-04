<script>
    export default {
        props: {
            title: String,
            description: String,
        },
        methods: {
            handleClose(e) {
                e.target.parentNode.remove();
            },
            hideParent() {
                setTimeout(() => {
                    if(this.$refs.errParent !== null) {
                        this.$refs.errParent.classList.add("hide");
                    }
                }, 1500);
            }
        },
        mounted:function() {
           this.hideParent();
        }
    }
</script>

<template>
    <div class="errorParent" ref="errParent">
        <div class="errorHeader">
            <img :src="require('@/assets/icons/errDivIcon.svg')">
            <p class="errTitle">{{ title }}</p>
        </div>
        <img @click="handleClose($event)" class="closeIcon" :src="require('@/assets/icons/quitIcon.svg')">
        <p class="errDesc">{{ description }}</p>
    </div>
</template>

<style>
    @import url(./ErrorSnack.css);
</style>