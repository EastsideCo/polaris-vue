<script>
export default {
    render(createElement) {
        return createElement(this.tag, {
            on: this.on,
            ref: 'element'
        }, this.$slots.default)
    },
    props: {
        tag: {
            type: String,
            required: true
        },
        on: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    methods: {
        blur() {
            this.$refs.element.blur();
        },
        focus() {
            this.$refs.element.focus();
        }
    }
};
</script>