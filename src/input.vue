<template>
    <div class="wrapper" :class="{ 'error': error }">
        <!--如果存在error，则class等于error类，如果不存在，则class不存在-->
        <input type="text" :value="value"
               :readonly="readonly" :disabled="disabled"/>
        <!--一起判断v-if，但不想加div,就用template-->
        <template v-if="error">
            <icon name="error" class="iconError"></icon>
            <span class="errorMessage"> {{error}} </span>
        </template>
    </div>
</template>
<script>
import icon from './g-icon'

export default {
    name: 'GuluInput', // name是用来调试的，方便知道这是哪个组件
    props: {
        value: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        error: {
            type: String,

        }
    },
    components: {icon}
}
</script>
<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $font-size: 12px;
    $box-shadow-color: rgb(0, 0, 0, .5);
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        > :not(:last-child) {
            margin-right: .5em;
        }
        > input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: 4px;
            padding: 0 8px;
            font-size: inherit;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
            }

            &[disabled], &[readonly] {
                border-color: #aaa;
                color: #aaa;
                cursor: not-allowed;
            }
        }

        &.error {
            > input {
                border-color: red;
            }

            > .iconError {
                fill: red;
            }

            > .errorMessage {
                color: red;
            }
        }
    }
</style>
