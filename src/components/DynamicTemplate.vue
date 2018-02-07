<script>
export default {
    render(createElement) {
        var validSlot = this.$slots.active;
        console.log('valid slot', validSlot);
        if (validSlot) {
            return validSlot[0];
        } else {
            console.log('returned empty div');
            return createElement('div');
        }
    },
    props: {
    }
}
</script>
