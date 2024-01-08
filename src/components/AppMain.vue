<script>
    export default {
    name: "AppMain"
    }
</script>

<template>
    <main>
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
    </main>
</template>

<style lang="scss" scoped>
    @use '../scss/general.scss' as *;
    @use '../scss/partials/mixins' as *;
    @use '../scss/partials/variables' as *;

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
</style>