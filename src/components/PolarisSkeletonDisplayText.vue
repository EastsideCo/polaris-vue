<template>
<div :class="classes"/>
</template>

<script>
import ComponentHelpers from '../ComponentHelpers.js';

export default {
    props: {
        size: {
            type: String,
            validate(s) {
                return [
                    'small',
                    'medium',
                    'large',
                    'extraLarge',
                ].indexOf(s) > -1;
            }
        },
    },
    computed: {
        classes() {
            var r = ComponentHelpers.makeComponentClass('Polaris-SkeletonDisplayText', [
                'size',
            ], this);
            r['Polaris-SkeletonDisplayText'] = false;
            r['Polaris-SkeletonDisplayText__DisplayText'] = true;
            return r;
        },
    },
}
</script>

