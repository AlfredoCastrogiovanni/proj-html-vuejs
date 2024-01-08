<script>
    export default {
    name: "ToolBar"
    }
</script>

<template>
    <div class="toolBar">
        <ul>
            <li><font-awesome-icon icon="fa-solid fa-ruler-combined" /></li>
            <li><font-awesome-icon icon="fa-solid fa-life-ring" /></li>
            <li><font-awesome-icon icon="fa-solid fa-book" /></li>
            <li><font-awesome-icon icon="fa-solid fa-cart-shopping" /></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    @use '../scss/general.scss' as *;
    @use '../scss/partials/mixins' as *;
    @use '../scss/partials/variables' as *;

    .toolBar {
        position: absolute;
        top: 200px;
        right: 0;
        z-index: 10;
        border-radius: 5px 0 0 5px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        ul {
            list-style: none;
            
            li {
                padding: 0.75rem 0.5rem 0.75rem 0.75rem;
                color: $titles-color;

                &:nth-child(3) {
                    position: relative;
                    left: 1px;
                }

                &:nth-child(4) {
                    position: relative;
                    left: -2px;
                }
            }
        }
    }
</style>