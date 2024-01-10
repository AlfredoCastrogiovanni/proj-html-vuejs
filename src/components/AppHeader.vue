<script>
    export default {
    name: "AppHeader",
    data() {
        return {
            windowTop: 0,
        }
    },
    methods: {
        onScroll(e) {
            this.windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
        }
    },
    props: {
        navLinks: Array
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll)
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll)
    },
    }
</script>

<template>
    <header :class="(windowTop > 0) ? 'box-shadow' : '' ">
        <div class="container">
            <div class="logo">
                <img src="../assets/img/logo.png" alt="MaxCoach's logo">
            </div>
            <nav>
                <ul>
                    <li v-for="link in navLinks">
                        {{ link }} <font-awesome-icon icon="fa-solid fa-angle-down" class="arrow"/>
                    </li>
                </ul>
            </nav>
            <div class="socials">
                <font-awesome-icon icon="fa-brands fa-twitter" />
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                <font-awesome-icon icon="fa-brands fa-instagram" />
                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @use '../scss/general.scss' as *;
    @use '../scss/partials/mixins' as *;
    @use '../scss/partials/variables' as *;


    .box-shadow {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 5px;
    }

    header {
        width: 100%;
        height: 80px;
        background-color: white;
        position: sticky;
        top: 0;
        z-index: 10;

        .container {
            max-width: 1600px;
            height: 100%;
            margin: 0 auto;

            @include flex(row, space-between, center);

            .logo {
                height: 100%;
                @include flex(row, space-between, center);

                img {
                    height: 37%;
                }
            }

            nav {
                height: 100%;
                @include flex(row, center, center);

                ul {
                    height: 100%;
                    list-style: none;
                    font-weight: 500;
                    font-size: 16px;
                    color: $titles-color;
                    @include flex(row, center, center);

                    li {
                        margin-right: 2.2rem;

                        .arrow {
                            font-size: 10px;
                        }
                    }
                }
            }

            .socials {
                height: 100%;
                @include flex(row, flex-start, center);

                & > * {
                    margin-right: 1.5rem;
                    font-size: 19px;
                    color: $text-color;
                } 
            }
        }
    }
</style>