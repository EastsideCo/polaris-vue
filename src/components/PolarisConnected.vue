<template>
<div class="Polaris-Connected">
    <polaris-connected-item
        v-if="$slots.left || left"
        position="Left">
        <slot name="left">{{ left }}</slot>
    </polaris-connected-item>
    
    <polaris-connected-item position="Primary">
        <slot v-if="!$slots.children">
           {{ children }}
        </slot>
        <slot name="children"></slot>
    </polaris-connected-item>
    
    <polaris-connected-item
        v-if="$slots.right || right"
        position="Right">
        <slot name="right">{{ right }}</slot>
    </polaris-connected-item>
</div>
</template>


<script>
import PolarisConnectedItem from './PolarisConnectedItem.vue';


export default {
    components: {
        PolarisConnectedItem
    },
    props: {
        left: String,
        right: String,
        children: String,
    },
    data() {
        return {
            focused: String
        };
    }
};
</script>