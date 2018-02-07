<template>
<div :class="classes">
    <progress 
        class="Polaris-ProgressBar__Progress" 
        :value="realProgress" 
        max="100"/>
    <div 
        class="Polaris-ProgressBar__Indicator"
        role="progressbar"
        aria-hidden="true"
        :style="{ width: realProgress + '%' }">
        <span class="Polaris-ProgressBar__Label">
            {{ realProgress }}
        </span>
    </div>
</div>
</template>

<script>
import ComponentHelpers from '../ComponentHelpers.js';

export default {
    props: {
        progress: {
            type: Number,
            default: 0,
        },
        size: {
            type: String,
            validate(s) {
                return ['small','medium','large'].indexOf(s) > -1;
            },
            default: 'medium',
        }
    },
    computed: {
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-ProgressBar', [
                'size'
            ], this);
        },
        realProgress() {
            var r = this.progress;
            if (r < 0) {
                if (process.env.NODE_ENV === 'development') {
                    console.warn('Values passed to the progress prop shouldn\'t be negative.');
                }
                r = 0;
            } else if (r > 100) {
                if (process.env.NODE_ENV === 'development') {
                    console.warn('Values passed to the progress prop shouldn\'t be over 100.');
                }
                r = 100;
            }
            return r;
        }
    }

}
</script>
