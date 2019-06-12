<template>
    <div class="sider" v-if="visible">
        <slot></slot>
        <button @click="visible=false">按钮</button>
    </div>
</template>
<script>
export default {
    name: 'Gulu-sider',
    data(){
        return {
            visible: true
        }
    },
}
</script>
<style lang="scss">
    .sider {
        position: relative;
        > button {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
</style>
