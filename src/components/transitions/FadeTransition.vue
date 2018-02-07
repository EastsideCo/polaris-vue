<template>
<transition
    name="PolarisVue-FadeTransition"
    enter-active-class="PolarisVue-FadeTransition--show"
    leave-active-class="PolarisVue-FadeTransition--show"
    enter-class="PolarisVue-FadeTransition--hide"
    leave-to-class="PolarisVue-FadeTransition--hide">
    <slot></slot>
</transition>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.PolarisVue-FadeTransition--show {
    transition: opacity 0.5s;
}
.PolarisVue-FadeTransition--hide {
    opacity: 0;
}
</style>
