<script>
    import ToolBar from './components/ToolBar.vue';
    import CallToAction from './components/CallToAction.vue';
    import AppHeader from './components/AppHeader.vue';
    import AppHero from './components/AppHero.vue';
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
        ToolBar,
        CallToAction,
        AppHeader,
        AppHero,
        AppMain,
        AppFooter,
    }
    }
</script>

<template>
    <ToolBar/>
    <CallToAction/>
    <AppHeader :navLinks="navLinks"/>
    <AppHero/>
    <AppMain/>
    <AppFooter/>
</template>

<style lang="scss">
    @use './scss/general.scss' as *;
</style>
