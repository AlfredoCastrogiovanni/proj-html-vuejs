<script>
    import CallToAction from './components/CallToAction.vue';
    import AppHeader from './components/AppHeader.vue';
    import AppMain from './components/AppMain.vue';
    import AppFooter from './components/AppFooter.vue';

    export default {
    name: "AppVue",
    data() {
        return {
            navLinks: ['Home','Pages','Courses','Features','Blog','Shop']
        }
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter,
        CallToAction
    }
    }
</script>

<template>
    <CallToAction/>
    <AppHeader :navLinks="navLinks"/>
    <AppMain/>
    <AppFooter/>
</template>

<style lang="scss">
    @use './scss/general.scss' as *;
</style>
