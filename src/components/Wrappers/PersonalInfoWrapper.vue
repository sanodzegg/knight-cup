<script>
    import HeaderSnack from "@/components/HeaderSnack/HeaderSnack.vue"
    import NavigationBar from '@/components/HeaderSnack/NavigationBar.vue';
    export default {
        components: {
            HeaderSnack,
            NavigationBar
        }
    }
</script>
<template>
    <div class="personalInfoWrapper">
        <div class="personalWrapperCol">
            <div class="personalIMGHeader">
                <HeaderSnack />
            </div>
            <div class="personalIMGWrapper">
                <img :src="require('@/assets/images/Personal.jpg')" alt="form page picture">
                <div class="pictureText">
                    <p class="quote">“When you see a good move, look for a better one.”</p>
                    <p class="author">-Emanuel Lasker</p>
                </div>
            </div>
        </div>
        <div class="personalWrapperCol">
            <NavigationBar step="Start creating your account" />
        </div>
    </div>
</template>

<style>
    @import url(./Wrappers.css);
</style>