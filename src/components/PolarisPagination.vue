<template>
<nav 
    :class="classes"
    :aria-label="accessibilityLabel || 'Pagination'">
    <polaris-unstyled-link
        v-if="previousURL"
        class="Polaris-Pagination__Button"
        :url="previousURL"
        @mouseup="handleMouseUp"
        aria-label="Previous">
        <polaris-icon :source="arrowLeft">
        </polaris-icon>
    </polaris-unstyled-link>
    <polaris-button
        v-if="!previousURL"
        class="Polaris-Pagination__Button"
        @click="onPrevious"
        @mouseup="handleMouseUp"
        :disabled="!hasPrevious">
        <polaris-icon :source="arrowLeft">
        </polaris-icon>
    </polaris-button>
    
    <polaris-unstyled-link
        v-if="nextURL"
        class="Polaris-Pagination__Button"
        :url="nextURL"
        @mouseup="handleMouseUp"
        aria-label="Next">
        <polaris-icon :source="arrowRight">
        </polaris-icon>
    </polaris-unstyled-link>
    <polaris-button
        v-if="!nextURL"
        class="Polaris-Pagination__Button"
        @click="onNext"
        @mouseup="handleMouseUp"
        :disabled="!hasNext">
        <polaris-icon :source="arrowRight">
        </polaris-icon>
    </polaris-button>
</nav>
</template>


<script>
import PolarisButton from './PolarisButton.vue';
import PolarisUnstyledLink from './PolarisUnstyledLink.vue';

import ComponentHelpers from '../ComponentHelpers.js';

import arrowRight from '../resources/arrow-right.svg';
import arrowLeft from '../resources/arrow-left.svg';

export default {
    components: {
        PolarisButton,
        PolarisUnstyledLink,
    },
    props: {
        hasNext: Boolean,
        hasPrevious: Boolean,
        nextURL: String,
        previousURL: String,
        plain: Boolean,
        accessibilityLabel: String,
    },
    computed:{
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-Pagination', [
                'plain',
            ], this);
        },
    },
    data() {
        return {
            arrowRight: arrowRight,
            arrowLeft: arrowLeft
        };
    },
    methods: {
        handleMouseUp(e) {
            var target = e.target || e.srcElement;
            target.blur();
        },
        onNext() {
            this.$emit('next');
        },
        onPrevious() {
            this.$emit('previous');
        }
    }
};
</script>
