<template>
<div class="tabs">
    <slot></slot>
</div>
</template>
<script>
    import Vue from 'vue'
    export default {
        name: 'Gulu-tabs',
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value){
                    return ['horizontal','vertical'].indexOf(value) >= 0
                }
            }
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        mounted() {
            this.eventBus.$on('update:selected',(name)=> {
                this.$emit('emit-change-selected', name)
            })
            this.$children.forEach((vm)=> {
                if(vm.$options.name === 'Gulu-tabsHeader'){
                    vm.$children.forEach((item)=>{
                        if(item.$options.name === 'Gulu-tabsItem' && item.name === this.selected){
                            this.eventBus.$emit('update:selected', this.selected, item)
                        }
                    })
                }
            })
        }
    }
</script>
<style>

</style>
