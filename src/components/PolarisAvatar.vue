<template>
<span :aria-label="label" role="img" :class="classes">
    <polaris-image v-if="source" 
                   role="presentation"
                   :source="source"
                   class="Polaris-Avatar__Image"
                   alt=""></polaris-image>
    <span v-if="!source && !customer" aria-hidden="true" class="Polaris-Avatar__Initials">
        {{ initials }}
    </span>
    <span v-if="!source && customer" v-html="customerSvg" class="Polaris-Avatar__Image">
    </span>
</span>
</template>

<script>
import ComponentHelpers from '../ComponentHelpers.js';
import PolarisImage from './PolarisImage.vue';
import PolarisIcon from './PolarisIcon.vue';
import * as avatars from '../resources/avatars';

var AVATAR_IMAGES = [];
for (var key in avatars) { 
    AVATAR_IMAGES.push(avatars[key]); 
}

const STYLE_CLASSES = ['styleOne', 'styleTwo', 'styleThree', 'styleFour', 'styleFive', 'styleSix'];


export default {
    components: {
        PolarisImage,
        PolarisIcon,
    },
    props: {
        size: {
            type: String,
            default: 'medium',
            validator(v) {
                return [
                    'small',
                    'medium',
                    'large',
                ].indexOf(v) != -1;
            }
        },
        name: String,
        initials: String,
        customer: Boolean,
        source: String,
        accessibilityLabel: String
    },
    computed: {
        label() {
            return this.accessibilityLabel ||
                   this.name ||
                   (this.initials ? 'Avatar with initials '+this.initials.split('').join(' ') : false) ||
                   'Avatar';
        },
        customerSvg() {
            return (this.customer ? this.customerPlaceholder(this.name || this.initials) : null);
        },
        classes() {
            var r = ComponentHelpers.makeComponentClass('Polaris-Avatar', [
                'size'
            ], this);
            
            var styleClass = this.styleClass(this.name || this.initials);
            r['Polaris-Avatar--'+styleClass] = true;
            
            return r;
        }
    },
    methods: {
        customerPlaceholder(name) {
            return name 
                ? AVATAR_IMAGES[name.charCodeAt(0) % AVATAR_IMAGES.length]
                : AVATAR_IMAGES[0];
        },
        styleClass(name) {
            return name
                ? STYLE_CLASSES[name.charCodeAt(0) % STYLE_CLASSES.length]
                : STYLE_CLASSES[0];
        }
    }
}
</script>
