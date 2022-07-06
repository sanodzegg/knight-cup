<script>
    import ChessForm from "@/components/ChessForm/ChessForm.vue";
    import LocationBar from "@/components/HeaderSnack/LocationBar.vue";
    import NavigationBar from "@/components/HeaderSnack/NavigationBar.vue";

    export default {
        components: {
            ChessForm,
            LocationBar,
            NavigationBar
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
</template>