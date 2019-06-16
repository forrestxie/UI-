<template>
    <div class="popover">
        <div @click.stop class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <div @click.stop="xxx">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Gulu-popover',
    props: [],
    data() {
        return {
            visible: false
        }
    },
    computed: {},
    created() {
    },
    methods: {
        xxx() {
            this.visible = !this.visible
            if(this.visible === true) {
               let clickDocument = ()=> {
                   console.log('监听器添加')
                    this.visible = false
                    document.removeEventListener('click', clickDocument)
                }
                document.addEventListener('click', clickDocument)
            }
        }
    },
    watch: {}
}
</script>
<style lang="scss" scoped>
    .popover {
        display: inline-block;
        vertical-align: top;
        position:relative;
        >.content-wrapper {
            position:absolute;
            bottom: 100%;
            left:0;
            border: 1px solid red;
            box-shadow:0 0 3px ;
        }
    }
</style>
