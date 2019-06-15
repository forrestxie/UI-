<template>
    <div class="tabs-header">
        <slot></slot>
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
<style>

</style>
