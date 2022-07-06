<script>
    import LocationBar from '@/components/HeaderSnack/LocationBar.vue';
    import NavigationBar from '@/components/HeaderSnack/NavigationBar.vue';
    import PersonalForm from '@/components/PersonalForm/PersonalForm.vue';

    export default {
        components: {LocationBar, NavigationBar, PersonalForm},
        data() {
            return {
                current: 1,
                active: 0
            }
        }
    }
</script>

<template>
    <div class="personalWrapperCol form">
        <LocationBar step="Start creating your account" />
        <div class="personalWrapperContent">
            <NavigationBar :current="current" :active="active" />
            <div class="personalInfoTextWrapper">
                <h2>Personal information</h2>
                <p>This is basic informaton fields</p>
            </div>
            <div class="personalWrapperForm">
                <PersonalForm @setActive="(n) => active = n" :active="active"/>
            </div>
        </div>
    </div>
</template>