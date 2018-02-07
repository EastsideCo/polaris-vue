<template>
<div :class="classes">
    <label 
        :id="id+'Label'"
        :for="id"
        class="Polaris-Label__Text">
        <slot v-if="!$slots.children">{{ children }}</slot>
        <slot name="children"></slot>
    </label>
</div>
</template>


<script>
export default {
    props: {
        children: String,
        id: String,
        hidden: Boolean
    },
    computed: {
        classes() {
            return {
                'Polaris-Label': true,
                'Polaris-Label--hidden': this.hidden
            };
        }
    },
    methods: {
        handleAction(action) {
            if (action.onAction) {
                action.onAction();
            }
        }
    }
}
</script>
