<template>
    <div class="tabs-header">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Gulu-tabsHeader',
    inject: ['eventBus'],
    created() {
        this.eventBus.$on('update:selected', (name)=> {// 不是自己传给自己
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
    > .actions-wrapper {
        margin-left: auto;
        border: 1px solid red;
    }
}
</style>
