
<script>
export default {
    render(createElement) {
        var validSlot = this.$slots.default;
        var child = validSlot ? validSlot[0] : createElement('div');

        if (this.active) {
            return createElement(this.tag, {}, [child]);
        }
        return child;
    },
    props: {
        tag: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            default: true,
        },
    }
}
</script>
