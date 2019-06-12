<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'
    export default {
       name: 'GuluToast'
}
</script>
<style>
    .toast {
        border: 1px solid red;
        position: fixed;
        height: 32px;
        top: 0;
        left: 50%; /*仅仅左边线50%*/
        transform: translateX(-50%); /*translate以自身宽高作对比*/
        font-size: 14px;
         display: flex;
        align-items: center;
        background:#333;
        color: #fff;
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,.5);
        padding: 0 16px;
    }
</style>
