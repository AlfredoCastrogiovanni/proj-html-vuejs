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
            navLinks: ['Home','Pages','Courses','Features','Blog','Shop'],
            cardList: [
                {
                    id: 0,
                    img: '/courses/artist-course-08-480x480.jpg',
                    price: 18.00,
                    title: 'The Acrylic Painting Academy',
                    lessons: 4,
                    students: 50,
                },
                {
                    id: 1,
                    img: '/courses/artist-course-07-480x480.jpg',
                    price: 21.00,
                    title: 'Drawing and Shading: Complete Course',
                    lessons: 14,
                    students: 50,
                },
                {
                    id: 2,
                    img: '/courses/artist-course-06-480x480.jpg',
                    price: 19.00,
                    title: 'The Color Theory for Digital Artist',
                    lessons: 7,
                    students: 50,
                },
                {
                    id: 3,
                    img: '/courses/artist-course-05-480x480.jpg',
                    price: 35.00,
                    title: 'Ultimate Guide to Digital Sketching for Beginner',
                    lessons: 14,
                    students: 50,
                },
                {
                    id: 4,
                    img: '/courses/artist-course-04-480x480.jpg',
                    price: 19.00,
                    title: 'Portrait Drawing The Smart Way',
                    lessons: 2,
                    students: 50,
                },
                {
                    id: 5,
                    img: '/courses/artist-course-03-480x480.jpg',
                    price: 19.00,
                    title: 'Mastering Watercolor Painting from Beginner',
                    lessons: 9,
                    students: 50,
                },
                {
                    id: 6,
                    img: '/courses/artist-course-02-480x480.jpg',
                    price: 25.00,
                    title: 'The Art & Science of Drawing',
                    lessons: 4,
                    students: 50,
                },
                {
                    id: 7,
                    img: '/courses/artist-course-01-480x480.jpg',
                    price: 22.00,
                    title: 'The Colored Pencil Drawing Course',
                    lessons: 6,
                    students: 50,
                },
                
            ]
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
    <AppMain :cardList="cardList"/>
    <AppFooter/>
</template>

<style lang="scss">
    @use './scss/general.scss' as *;
</style>
