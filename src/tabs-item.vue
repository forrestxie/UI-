<template>
    <div class="tabs-item" @click="xxx" :class="classes">
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
    data() {
      return {
          active: false
      }
    },
    inject: ['eventBus'],
    computed: {
        classes() {
            return {active: this.active}
        }
    },
    created() {
        this.eventBus.$on('update:selected', (name)=> {// 不是自己传给自己
            this.active = name === this.name
        })
    },
    methods: {
        xxx() {
            this.eventBus.$emit('update:selected', this.name, this)
        }
    }
}
</script>
<style lang="scss" scoped>
    .tabs-item{
        flex-shrink: 0;
        padding: 0 1em;
        height:100%;
        display:flex;
        cursor: pointer;
        align-items:center;
        color:#333333;
    }
</style>
