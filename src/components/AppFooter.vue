<script>
    export default {
    name: "AppFooter"
    }
</script>

<template>
    <footer>
        <div class="container">
            <div class="column address">
                <div class="title">Address</div>
                <ul>
                    <li>382 NE 191st St # 87394 Miami, FL 33179-3899</li>
                    <li>+1 (305) 547-9909 (9am - spm EST, Monday - Friday)</li>
                    <li>support@maxcoach.com</li>
                </ul>
                <div class="socials-wrapper">
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                    <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                </div>
            </div>
            <div class="column explore">
                <div class="title">Explore</div>
                <ul>
                    <li>Start here</li>
                    <li>Success story</li>
                    <li>Blog</li>
                    <li>Courses</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div class="column information">
                <div class="title">Information</div>
                <ul>
                    <li>Membership</li>
                    <li>Purchase guide</li>
                    <li>Privacy policy</li>
                    <li>Terms of services</li>
                </ul>
            </div>
            <div class="column instagram">
                <div class="title">Instagram <span class="tag">@maxcoach</span></div>
            </div>
        </div>
        <div class="credits">@ 2024 Alfredo. All Rights Reserved</div>
    </footer>
</template>

<style lang="scss" scoped>
    @use '../scss/general.scss' as *;
    @use '../scss/partials/mixins' as *;
    @use '../scss/partials/variables' as *;

    footer {
        padding: 8rem 0 3rem 0;

        .container {
            @include flex(row, center);

            .column {
                margin-right: 5rem;

                .title {
                    margin-bottom: 1rem;
                    font-size: 18px;
                    font-weight: 600;
                    color: $titles-color;

                    span {
                        font-size: 15px;
                        color: $primary-color;
                    }
                }

                ul {
                    font-size: 13px;
                    color: $text-color;
                    list-style: none;

                    li {
                        margin-bottom: 1rem;
                    }
                }

                .socials-wrapper {
                    padding-top: 1rem;
                    @include flex(row, flex-start, center);
                    color: $text-color;
                    font-size: 20px;

                    & > * {
                        margin-right: 2rem;
                    }
                }
            }
        }

        .credits {
            padding-top: 5rem;
            text-align: center;
            font-size: 14px;
            font-weight: 500;
            color: $text-color;
        }
    }
</style>