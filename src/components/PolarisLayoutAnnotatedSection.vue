<template>
<div class="Polaris-Layout__AnnotatedSection">
    <div class="Polaris-Layout__AnnotationWrapper">
        <div class="Polaris-Layout__Annotation">
            <polaris-text-container>
                <polaris-heading tag="h2">
                    {{ title }}
                </polaris-heading>
                <p v-if="description">{{ description }}</p>
                <slot name="description"></slot>
            </polaris-text-container>
        </div>
        <div class="Polaris-Layout__AnnotationContent">
            <slot></slot>
        </div>
    </div>
</div>
</template>

<script>
import ComponentHelpers from '../ComponentHelpers.js';

export default {
    props: {
        title: String,
        description: String,
    },
    computed: {
    }
}
</script>