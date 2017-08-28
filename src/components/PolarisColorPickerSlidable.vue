<template>
<div ref="track" 
     class="Polaris-ColorPicker__Slidable"
     @mousedown="startDrag"
     @touchstart="startDrag">
    
    <div :style="draggerStyle"
         class="Polaris-ColorPicker__Dragger"
         ref="dragger">
    </div>
</div>
</template>


<script>
import Vue from 'vue';

export default {
    props: {
        draggerX: Number,
        draggerY: Number
    },
    data() {
        return {
            dragging: false
        };
    },
    mounted() {
        console.log('draggerheight', this.$refs.dragger.clientWidth);
        this.$emit('draggerheight', this.$refs.dragger.clientWidth);
        
      
        window.addEventListener('mousemove', this.handleMove);
        window.addEventListener('touchmove', this.handleMove);
        window.addEventListener('mouseup', this.endDrag);
        window.addEventListener('touchend', this.endDrag);
        window.addEventListener('touchcancel', this.endDrag);
    },
    beforeDestroy() {
        window.removeEventListener('mousemove', this.handleMove);
        window.removeEventListener('touchmove', this.handleMove);
        window.removeEventListener('mouseup', this.endDrag);
        window.removeEventListener('touchend', this.endDrag);
        window.removeEventListener('touchcancel', this.endDrag);
    },
    computed: {
        draggerStyle() {
            return {
                transform: 'translate3d('+this.draggerX+'px, '+this.draggerY+'px, 0)'
            };
        }
    },
    methods: {
        startDrag(e) {
            if (e.type === 'mousedown') {
                this.handleDraggerMove(e.clientX, e.clientY);
            }
            this.dragging = true;
        },
        
        handleMove(e) {
            if (!this.dragging) { return; }
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();
            
            if (e.type === 'mousemove') {
                this.handleDraggerMove(e.clientX, e.clientY);
                return;
            }
            
            this.handleDraggerMove(e.touches[0].clientX, e.touches[1].clientY);
        },
        
        endDrag() {
            this.dragging = false;
        },
        
        handleDraggerMove(x, y) {
            const rect = this.$refs.track.getBoundingClientRect();
            this.$emit('change', {
                x: x - rect.left,
                y: y - rect.top
            });
        }
    }
};
</script>