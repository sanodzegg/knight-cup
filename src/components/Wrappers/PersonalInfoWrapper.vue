<script>
    import HeaderSnack from "@/components/HeaderSnack/HeaderSnack.vue"
    import LocationBar from '@/components/HeaderSnack/LocationBar.vue';
import NavigationBar from "../HeaderSnack/NavigationBar.vue";
import PresonalForm from "../PersonalForm/PresonalForm.vue";
    export default {
        components: {
    HeaderSnack,
    LocationBar,
    NavigationBar,
    PresonalForm
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
        <div class="personalWrapperCol form">
            <LocationBar step="Start creating your account" />
            <div class="personalWrapperContent">
                <NavigationBar :current="current" :active="active" />
                <div class="personalInfoTextWrapper">
                    <h2>Personal information</h2>
                    <p>This is basic informaton fields</p>
                </div>
                <div class="personalWrapperForm">
                    <PresonalForm @setActive="(n) => active = n" :active="active"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    @import url(./Wrappers.css);
</style>