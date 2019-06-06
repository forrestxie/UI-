<template>
    <button class="nt-button" :class=`icon-${iconPosition}` @click="$emit('click')">
        <g-icon class="icon" v-if="iconName && !loading" :name="iconName"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
import Vue from 'vue'
import Icon from './g-icon'

export default {
    props: {
        iconName: {},
        loading: {
            type: Boolean,
            default: false
        },
        iconPosition: {
            type: String,
            default: 'left',
            validator(value) {
                return value === 'left' || value === 'right'
            }
        }
    },
    components: {
        'g-icon': Icon
    }
}
</script>
<style lang="scss">
    @keyframes spin {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .nt-button {
        height: var(--button-height);
        padding: 0 1em;
        font-size: var(--font-size);
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: top;

        &:hover { border-color: var(--border-color-hover) }
        &:active { background-color: var(--button-active-bg); }
        &:focus { outline: none; }
        > .icon { order: 1; margin-right: .3em }
        > .content{ order: 2; }
        &.icon-right {
            > .icon { order: 2; margin-right: 0; margin-left: .3em }
            > .content { order: 1; }
        }
        .loading{
            animation: spin 1s infinite linear;
        }
    }
</style>
