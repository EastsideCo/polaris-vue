<template>
<transition
    name="PolarisVue-FadeUpTransition"
    enter-active-class="PolarisVue-FadeUpTransition--show"
    leave-active-class="PolarisVue-FadeUpTransition--show"
    enter-class="PolarisVue-FadeUpTransition--hide"
    leave-to-class="PolarisVue-FadeUpTransition--hide">
    <slot></slot>
</transition>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.PolarisVue-FadeUpTransition--show {
    transition: opacity 0.5s, transform 0.5s;
}
.PolarisVue-FadeUpTransition--hide {
    opacity: 0;
    transform: translateY(30px);
}
</style>
