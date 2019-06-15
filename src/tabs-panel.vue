<template>
    <div class="tabs-panel" v-if="active" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Gulu-tabsPanel',
    data() {
        return {
            active: false
        }
    },
    inject: ['eventBus'],
    props: {
        name: {
            type: String,
            required: true
        }
    },
    computed: {
        classes() {
            return {active: this.active}
        }
    },
    created() {
        this.eventBus.$on('update:selected', (name)=> {// 不是自己传给自己
            this.active = name === this.name
    })
    }
}
</script>
<style>

</style>
