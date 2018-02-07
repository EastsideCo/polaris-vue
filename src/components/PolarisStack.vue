<script>
import ComponentHelpers from '../ComponentHelpers.js';
import PolarisStackItem from './PolarisStackItem.vue';


export default {
    polarisName: 'Stack',
    render(createElement) {
        return createElement('div', {
            'class': this.classes,
        }, ComponentHelpers.wrapNodesWithComponent(createElement, 
                                                   this.$slots.default, 
                                                   PolarisStackItem));
    },
    props: {
        vertical: Boolean,
        wrap: Boolean,
        spacing: {
            type: String,
            default: 'tight',
            validator(v) {
                return [
                    'extraTight',
                    'tight',
                    'loose',
                    'extraLoose',
                    'none'
                ].indexOf(v) != -1;
            }
        },
        alignment: {
            type: String,
            default: 'leading',
            validator(v) {
                return [
                    'leading',
                    'trailing',
                    'center',
                    'fill',
                    'baseline'
                ].indexOf(v) != -1;
            }
        },
        distribution: {
            type: String,
            default: 'leading',
            validator(v) {
                return [
                    'equalSpacing',
                    'leading',
                    'trailing',
                    'center',
                    'fill',
                    'baseline',
                    'fillEvenly'
                ].indexOf(v) != -1;
            }
        },
    },
    computed: {
        classes() {
            var r = ComponentHelpers.makeComponentClass('Polaris-Stack', [
                'vertical',
                'spacing',
                'alignment',
                'distribution'
            ], this);
            r['Polaris-Stack--noWrap'] = !this.wrap;
            return r;
        }
    }
};
</script>
