<template>
    <div class="tabs-item" @click="xxx">
        <slot name="actions"></slot>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Gulu-tabsItem',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String|Number,
            required: true
        }
    },
    inject: ['eventBus'],
    created() {
        this.eventBus.$on('update:selected', (name)=> {// 不是自己传给自己
        })
    },
    methods: {
        xxx() {
            this.eventBus.$emit('update:selected', this.name)
        }
    }
}
</script>
<style>
    .tabs-item{

    }
</style>
