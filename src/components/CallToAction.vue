<script>
    export default {
    name: "CallToAction"
    }
</script>

<template>
    <div class="callToAction">
        <div class="container">
            <div class="text">Starts TOMORROW! Our biggest event of the year...</div>
            <div class="timer"> <font-awesome-icon icon="fa-regular fa-clock" class="clockIcon"/> 00 : 00 : 00 : 00</div>
            <button>Get ticket</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../scss/general.scss' as *;
    @use '../scss/partials/mixins' as *;
    @use '../scss/partials/variables' as *;


    .callToAction {
        height: 50px;
        @include flex(row, center, center);
        background-color: $third-color;
        .container {
            padding: 0.5rem 0;
            @include flex(row, center, center);

            .text {
                font-size: 14px;
                margin-right: 2rem;
                color: $text-color;
            }

            .timer {
                font-size: 20px;
                font-weight: 600;
                margin-right: 2rem;

                .clockIcon {
                    font-size: 17px;
                    margin-right: 0.5rem;
                }
            }

            button {
                padding: 0.5rem 2rem;

                border: none;
                border-radius: 5px;

                font-size: 13px;
                font-weight: 800;
                
                color: white;
                background-color: $primary-color;
                transition: all 0.2s ease-in;

                    &:hover {
                            background-color: $secondary-color;
                    }
            }
        }
    }
</style>