<script>
    export default {
    name: "AppMain"
    }
</script>

<template>
    <main>
        <!-- OPTIONS -->
        <section class="options">
            <img src="../assets/img/options/maxcoach-shape-13-150x150.png" alt="" class="shape1">
            <img src="../assets/img/options/artist-shape-01-600x577.png" alt="" class="shape2">
            <div class="container">
                <div class="content">
                    <div class="hand-writing">Artist Coaching</div>
                    <div class="text">I understand what it takes to create. <br> I can help you with</div>
                </div>
                <div class="options-wrapper">
                    <div class="options-card">
                        <div class="img-wrapper">
                            <img src="../assets/img/options/artist-box-image-01.png" alt="">
                        </div>
                        <h2>Online Courses</h2>
                        <p>Online art coaching now offers you a very powerful way to redesign your artist mind.</p>
                    </div>
                    <div class="options-card">
                        <div class="img-wrapper">
                            <img src="../assets/img/options/artist-box-image-02.png" alt="">
                        </div>
                        <h2>One to One</h2>
                        <p>Getting the necessary clarity about the current state to help you improve your ability.</p>
                    </div>
                    <div class="options-card">
                        <div class="img-wrapper">
                            <img src="../assets/img/options/artist-box-image-03.png" alt="">
                        </div>
                        <h2>Anywhere</h2>
                        <p>Access to valuable and portable program which allow you to setup and live anywhere you want.</p>
                    </div>
                    <div class="options-card">
                        <div class="img-wrapper">
                            <img src="../assets/img/options/artist-box-image-04.png" alt="">
                        </div>
                        <h2>On Time</h2>
                        <p>Punctuality is our top priority because it's an essential criteria to assess a program quality.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- GARRIX QUOTE -->
        <section class="garrix-quote">
            <div class="container">
                <div class="quote-wrapper">
                    <div class="img-wrapper">
                        <img src="../assets/img/artist-quote-icon.png" alt="">
                    </div>
                    <div class="quote">I coach and mentor <br> visual artists, like <br> you, to Create Like <br> You Mean It</div>
                    <div class="hand-writing">Martin Garrix</div>
                </div>
                <div class="content">
                    <p>
                        As a coach and mentor, my ultimate goal is to motivate visual artists
                        toward inspired action. I help you get you back on track to being the
                        productive, creative, meaningful and authentic artist you truly want
                        to be. I support artists in crafting and living a creative life as well
                        as feeling good about themselves and their art.
                    </p>
                    <p>As an artist and an educator for nearly 30 years, I understand what it takes to create.</p>
                    <button>Get started today</button>
                </div>
            </div>
        </section>
        <!-- VIDEO PLAYER -->
        <section class="video-player">
            <div class="container">
                <div class="video-wrapper">
                    <img src="../assets/img/video/artist-video-poster.jpg" alt="">
                    <img src="../assets/img/video/icon-youtube-play.png" alt="" class="play-button">
                    <img src="../assets/img/video/maxcoach-shape-12-150x150.png" alt="" class="shape1">
                    <img src="../assets/img/video/maxcoach-shape-05-150x150.png" alt="" class="shape2">
                </div>
                <img src="../assets/img/video/wave.svg" alt="" class="wave">
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    @use '../scss/general.scss' as *;
    @use '../scss/partials/mixins' as *;
    @use '../scss/partials/variables' as *;

    .hand-writing {
        font-family: 'Great Vibes', cursive;
        color: $secondary-color;
    }

    // OPTIONS
    section.options {
        padding: 5rem 0;
        position: relative;

        background-image: url('../assets/img/options/maxcoach-shape-03.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;

        .shape1 {
            position: absolute;
            right: -45px;
            top: 260px;
        }

        .shape2 {
            position: absolute;
            top: 45px;
            left: -95px;
            transform: rotate(235deg);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;

            .content {
                margin-bottom: 5rem;
                text-align: center;

                .hand-writing {
                    font-family: 'Great Vibes', cursive;
                    font-size: 40px;
                    color: $secondary-color;
                }

                .text {
                    font-size: 30px;
                    font-weight: 600;
                    color: $titles-color;
                }
            }

            .options-wrapper {
                width: 100%;
                @include flex(row, center);

                .options-card {
                    width: calc(100% / 4 - 2rem);
                    margin-right: 2rem;

                    .img-wrapper {
                        height: 120px;
                    }

                    h2 {
                        font-size: 17px;
                        font-weight: 600;
                        margin-bottom: 1rem;
                        color: $titles-color;
                    }

                    p {
                        font-size: 13px;
                        color: $text-color;
                        padding-right: 1rem;
                    }
                }
            }
        }
    }

    // GARRIX QUOTE
    section.garrix-quote {
        padding: 1rem 0;

        .container {
            width: 1200px;
            margin: 0 auto;
            @include flex(row, center);

            .quote-wrapper{
                width: calc(100% / 2 - 2rem);
                margin-right: 2rem;
                text-align: center;

                .img-wrapper {
                    height: 35px;
                    margin-bottom: 20px;

                    img {
                        height: 100%;
                    }
                }

                .quote {
                    font-size: 40px;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }

                .hand-writing {
                    font-size: 40px;
                }
            }

            .content {
                width: calc(100% / 2 - 2rem);
                padding-top: 65px;

                & > p {
                    font-size: 17px;
                    color: $text-color;
                    margin-bottom: 2rem;

                    &:first-of-type {
                    }
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
        }
    }

    // VIDEO PLAYER
    section.video-player {
        padding: 8rem 0;
        position: relative;

        .container {
            @include flex(row, center, center);

            .video-wrapper {
                width: 950px;
                height: 550px;
                position: relative;
                z-index: 3;

                img {

                    &:first-of-type {
                        width: 100%;
                        height: 100%;
                        border-radius: 10px;
                    }
                }
                .play-button {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 4;
                }

                .shape1 {
                    position: absolute;
                    bottom: -15px;
                    right: -85px;
                    z-index: -1;
                }

                .shape2 {
                    position: absolute;
                    top: -20px;
                    left: -20px;
                    z-index: -1;
                }

            }

            .wave {
                width: 100%;
                position: absolute;
                bottom: 0;
                z-index: 1;
            }
        }
    }
</style>