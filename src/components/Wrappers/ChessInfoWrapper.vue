<script>
    import HeaderSnack from "@/components/HeaderSnack/HeaderSnack.vue"
    import LocationBar from '@/components/HeaderSnack/LocationBar.vue';
    import NavigationBar from "../HeaderSnack/NavigationBar.vue";
    import ChessForm from "../ChessForm/ChessForm.vue";
    export default {
        components: {
        HeaderSnack,
        LocationBar,
        NavigationBar,
        ChessForm
    },
        data() {
            return {
                current: 2,
                active: 0
            }
        }
    }
</script>
<template>
    <div class="chessInfoWrapper">
        <div class="chessWrapperCol">
            <div class="chessIMGHeader">
                <HeaderSnack />
            </div>
            <div class="chessIMGWrapper">
                <img :src="require('@/assets/images/Chess.jpg')" alt="chess form page picture">
                <div class="pictureText">
                    <p class="quote">“Many have become chess masters; <br /> no one has become the master of chess.”</p>
                    <p class="author">- Siegbert Tarrasch</p>
                </div>
            </div>
        </div>
        <div class="chessWrapperCol form">
            <LocationBar step="First step is done, continue to finish onboarding" />
            <div class="chessWrapperContent">
                <NavigationBar :current="current" :active="active" />
                <div class="chessInfoTextWrapper">
                    <h2>Chess experience</h2>
                    <p>This is basic informaton fields</p>
                </div>
                <div class="chessWrapperForm">
                    <ChessForm @setActive="(n) => active = n" :active="active"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    @import url(./Wrappers.css);
</style>