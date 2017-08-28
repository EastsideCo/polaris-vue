<template>
<span :class="classes" v-html="finalSource" :aria-label="accessibilityLabel"></span>
</template>


<script>
import SvgSource from '../SvgSource.js';

export default {
    props: {
        source: {
            type: String,
            required: true
        },
        color: {
            type: String
        },
        backdrop: {
            type: Boolean
        },
        accessibilityLabel: String
    },
    computed: {
        finalSource() {
            return SvgSource.create(this.source, 'Polaris-Icon__Svg');
        },
        classes() {
            var r = {
                'Polaris-Icon': true,
                'Polaris-Icon--hasBackdrop': this.backdrop
            };
            if (this.color) {
                var valueTag = this.color.charAt(0).toUpperCase()+this.color.slice(1);
                r['Polaris-Icon--color'+valueTag] = true;
            }
            return r;
        }
    }
};
</script>