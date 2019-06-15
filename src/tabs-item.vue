<template>
    <div class="tabs-item">
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
        }
    }
}
</script>
<style>
    .tabs-item{

    }
</style>
