<template>
    <transition
        enter-active-class="Polaris-Collapsible--animating"
        leave-class="Polaris-Collapsible--open"
        leave-to-class="Polaris-Collapsible--fullyOpen"
        >
        <slot></slot>
    </transition>
</template>

<script>
export default {
    //'@TODO: fix this, transitions do not work'
}
</script>
