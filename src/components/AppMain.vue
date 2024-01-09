<script>
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

    export default {
    name: "AppMain",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    }
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
                    <div class="circle"></div>
                    <img src="../assets/img/video/shape-02.svg" alt="" class="shape3">
                </div>
                <img src="../assets/img/video/wave.svg" alt="" class="wave">
            </div>
        </section>
        <!-- TESTIMONIALS -->
        <section class="testimonials">
            <div class="titles">
                <div class="hand-writing">Testimonials</div>
                <div class="title">Why do people love me?</div>
            </div>
            <div class="carousel-wrapper">
                <Carousel wrap-around="true" itemsToShow="3">
                    <Slide :key="0">
                    <div class="slide">
                        <h2>High level of efficiency and scientific teaching methods</h2>
                        <p>I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.</p>
                        <div class="author">
                            <div class="img-wrapper">
                                <img src="../assets/img/testimonials/artist-testimonial-avatar-04.jpg" alt="">
                            </div>
                            <div class="info">
                                <p class="name">Mina Hollace</p>
                                <p class="job">/ Freelancer</p>
                            </div>
                        </div>
                    </div>
                    </Slide>
                    <Slide :key="1">
                    <div class="slide">
                        <h2>Professional team of specialists and passionate mentors at reach</h2>
                        <p>I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.</p>
                        <div class="author">
                            <div class="img-wrapper">
                                <img src="../assets/img/testimonials/artist-testimonial-avatar-01.jpg" alt="">
                            </div>
                            <div class="info">
                                <p class="name">Madley Pondor</p>
                                <p class="job">/ IT Specialist</p>
                            </div>
                        </div>
                    </div>
                    </Slide>
                    <Slide :key="2">
                    <div class="slide">
                        <h2>The MaxCoach team works really hard to ensure high quality</h2>
                        <p>I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to be adopted for learners of all levels.</p>
                        <div class="author">
                            <div class="img-wrapper">
                                <img src="../assets/img/testimonials/artist-testimonial-avatar-03.jpg" alt="">
                            </div>
                            <div class="info">
                                <p class="name">Luvic Dubble</p>
                                <p class="job">/ Private Tutor</p>
                            </div>
                        </div>
                    </div>
                    </Slide>
                    <Slide :key="3">
                    <div class="slide">
                        <h2>It's a choice of quality for people with special needs</h2>
                        <p>I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.</p>
                        <div class="author">
                            <div class="img-wrapper">
                                <img src="../assets/img/testimonials/artist-testimonial-avatar-02.jpg" alt="">
                            </div>
                            <div class="info">
                                <p class="name">Florence Themes</p>
                                <p class="job">/ Multimedia Admin</p>
                            </div>
                        </div>
                    </div>
                    </Slide>
    
                    <template #addons>
                        <Pagination />
                    </template>
                </Carousel>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    @use '../scss/general.scss' as *;
    @use '../scss/partials/mixins' as *;
    @use '../scss/partials/variables' as *;


    section.testimonials {
        padding: 1rem 0;
        background-color: #fbfaf8;

        .titles {
            margin-bottom: 3rem;
            text-align: center;

            .hand-writing {
                font-size: 50px;
            }

            .title {
                font-size: 40px;
                font-weight: 600;
                color: $titles-color;
            }
        }

        .carousel-wrapper {
            padding: 0 3rem;

            .carousel__viewport {
                padding: 10px 0 !important;
            }

            .slide {
                height: 350px;
                width: calc(100% - 7rem);
                margin: 0 0.5rem;
                padding: 2rem 2.5rem;
                font-size: 20px;
                border-radius: 8px;
                background-color: white;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                text-align: start;

                h2 {
                    font-size: 18px;
                    font-weight: 600;
                    color: $titles-color;
                    margin-bottom: 1rem;
                }

                & > p {
                    margin-bottom: 2rem;
                    font-size: 16px;
                    color: $text-color;
                }

                .author {
                    @include flex();

                    .img-wrapper {
                        width: 80px;
                        height: 80px;
                        margin-right: 1rem;

                        img {
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                            overflow: hidden;
                        }
                    }

                    .info {
                        @include flex(column, center, center);
                        .name {
                            margin-bottom: 0.5rem;
                            font-size: 14px;
                            font-weight: 600;
                            color: $titles-color;
                        }

                        .job {
                            font-size: 14px;
                            color: $text-color;
                        }
                    }
                }

            }

            .carousel__pagination {
                margin: 3rem 0;
            }
        }
    }

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
                    position: relative;

                    &:nth-child(even) {
                        top: 25px;
                    }

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

                .shape3 {
                    position: absolute;
                    top: -45px;
                    left: -125px;
                    z-index: -2;
                }

                .circle {
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    border: 12px solid #ECC5AB;

                    position: absolute;
                    top: 95px;
                    right: -75px;
                    z-index: 5;
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
