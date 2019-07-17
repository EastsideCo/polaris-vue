<script>
import PolarisButtonGroupItem from './PolarisButtonGroupItem.vue';

export default {
    render(createElement) {
        var items = [];

        for (let slot of Object.values(this.$slots)) {
            for (let child of slot) {
                items.push(createElement('polaris-button-group-item', {
                }, [child]));
            }
        }

        return createElement('div', {
            'class': this.classes
        }, items)
    },
    components: {
        PolarisButtonGroupItem
    },
    props: {
        segmented: Boolean,
        fullWidth: Boolean,
        connectedTop: Boolean
    },
    computed: {
        classes() {
            return {
                'Polaris-ButtonGroup': true,
                'Polaris-ButtonGroup--segmented': this.segmented,
                'Polaris-ButtonGroup--fullWidth' : this.fullWidth,
                'Polaris-ButtonGroup--connectedTop' : this.connectedTop
            };
        }
    }
};
</script>
