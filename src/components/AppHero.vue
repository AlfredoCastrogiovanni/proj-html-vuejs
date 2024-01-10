<script>
    export default {
    name: "AppHero"
    }
</script>

<template>
    <div class="hero">
        <!-- Shapes isn't align on 2k resolution -->
        <div class="container">
            <img src="../assets/img/hero/artist-shape-02.png" alt="" class="shape1">
            <div class="left-imgs">
                <img src="../assets/img/hero/artist-hero-image-01.jpg" alt="" class="focus-img bottom-img">
                <img src="../assets/img/hero/artist-hero-image-02.jpg" alt="" class="focus-img">
                <img src="../assets/img/hero/artist-hero-image-03.png" alt="" class="shape4">
            </div>
            <div class="content">
                <div class="hand-writing">Hello, I'm Martin</div>
                <div class="title">Artist Coaching and Mentoring <br> Might Be for You</div>
                <button>Get started today</button>
            </div>
            <div class="right-imgs">
                <img src="../assets/img/hero/artist-hero-image-04.jpg" alt="" class="first-img">
                <img src="../assets/img/hero/artist-shape-01.png" alt="" class="shape2">
                <img src="../assets/img/hero/artist-shape-04.png" alt="" class="shape3">
                <img src="../assets/img/hero/artist-shape-05.png" alt="" class="shape5">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../scss/general.scss' as *;
    @use '../scss/partials/mixins' as *;
    @use '../scss/partials/variables' as *;

    .hero {
        background-color: #fbf9f6;
        position: relative;

        .container {
            width: 100%;
            @include flex(row, space-evenly, stretch);

            .shape1 {
                position: absolute;
                top: 0;
                left: 0;
            }

            .left-imgs {
                width: 30vw;
                padding: 7rem 1rem 0 0;
                position: relative;
                @include flex(row, flex-end, baseline);

                .focus-img {
                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                    position: relative;
                    z-index: 4;
                }

                .bottom-img {
                    z-index: 5;
                    top: 200px;
                    left: 8px;
                }

                .shape4 {
                    position: absolute;
                    bottom: 43px;
                    left: 426px;
                    overflow: hidden;
                }
            }

            .content {
                width: 40vw;
                @include flex(column, center, center);


                .hand-writing {
                    font-family: 'Great Vibes', cursive;
                    font-size: 50px;
                    color: $secondary-color;
                }

                .title {
                    font-size: 40px;
                    font-weight: 600;
                    color: $titles-color;
                    word-spacing: 5px;
                    text-align: center;
                    margin-bottom: 3rem;
                }

                button {
                padding: 1rem 2rem;

                border: none;
                border-radius: 5px;

                font-size: 13px;
                font-weight: 800;
                
                color: white;
                background-color: $primary-color;
                }
            }

            .right-imgs {
                width: 30vw;
                position: relative;

                .first-img {
                    margin: 17rem 0 5rem 0;
                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                    position: relative;
                    z-index: 5;
                }

                .shape2 {
                    position: absolute;
                    right: 130px;
                }

                .shape3 {
                    position: absolute;
                    top: 80px;
                    right: 166px;
                }

                .shape5 {
                    position: absolute;
                    bottom: 22px;
                    left: 113px;
                }
            }
        }
    }

    @media all and (min-width: 1920px) {
        .hero .container .left-imgs .shape4 {
            left: 640px;
        }
    }
</style>