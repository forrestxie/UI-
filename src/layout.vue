<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Gulu-layout',
    data(){
        return {
            layoutClass: {
                hasSider: false
            }
        }
    },
    mounted() {
        this.$children.forEach((vm)=>{
            console.log(vm.$options.name, this.layoutClass)
            if(vm.$options.name === 'Gulu-sider') {
                this.layoutClass.hasSider = true
            }
        })

    }
}
</script>

<style lang="scss" scoped>
    .layout {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        border: 1px solid red;
        &.hasSider{
            flex-direction: row;
        }
    }
</style>
