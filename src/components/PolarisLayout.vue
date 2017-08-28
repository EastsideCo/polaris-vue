<template>
<div class="Polaris-Layout">
    <template v-if="sectioned" v-for="slot, name in $slots">
        <polaris-layout-section>
            <slot :name="name"></slot>
        </polaris-layout-section>
    </template>
    <template v-if="!sectioned" v-for="slot, name in $slots">
        <slot :name="name"></slot>
    </template>
</div>
</template>

<script>
export default {
    props: {
        sectioned: Boolean,
    }
};
</script>