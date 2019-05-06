<template>
    <div class="buttonGroup">
        <slot></slot>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log(this.$el.children.nodeName)
        for(let node in this.$el.children) {
            console.log(node.nodeName)
            if(node.nodeName !== 'button') {
                console.warn('g-button-group的子元素应该全为 button')
            }
        }
    }
}
</script>
<style lang="scss">
.buttonGroup {
    display: inline-flex;
    vertical-align: top;
    > .nt-button {
        border-radius: 0;
        &:not(:first-child) {
            margin-left: -1px;
        }
        &:first-child{
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
        }
        &:last-child{
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }
        &:hover{
            position: relative;
            z-index: 1;
        }
    }
}
</style>
