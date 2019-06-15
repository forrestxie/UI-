<template>
    <div class="tabs-header">
        <slot></slot>
        <div class="underLine" ref="underLine"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Gulu-tabsHeader',
    inject: ['eventBus'],
   mounted() {
            this.eventBus.$on('update:selected', (name, vm)=> {// 不是自己传给自己
              let {width, height, left, top}=vm.$el.getBoundingClientRect()
                this.$refs.underLine.style.left = left + 'px'// this.$refs.underLine.style.transform = translateX(`${left}px`)
                this.$refs.underLine.style.width = width + 'px'

            })
    }
}
</script>
<style lang="scss" scoped>
    $tab-height: 40px;
.tabs-header {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid red;
    position: relative;
    >.underLine{
        position:absolute;
        bottom: 0;
        left:0;
        border-bottom: 2px solid blue;
        transition: left 250ms, width 350ms;
    }
    > .actions-wrapper {
        margin-left: auto;
        border: 1px solid red;
    }
}
</style>
