<template>
    <div class="toast" ref="wrapper">
        <slot></slot>
        <div class="line" ref="line"></div>
        <span v-if="closeButton" @click="clickClose" class="close">{{closeButton.text}}</span>
    </div>
</template>
<script>
import Vue from 'vue'
    export default {
       name: 'GuluToast',
       props: {
           autoClose: {
               type: Boolean,
               default: true
           },
           autoCloseDelay: {
               type: Number,
               default: 3
           },
           closeButton: {
               type: Object,
               default(){
                   return {
                       text: '关闭',
                       callback: (toast)=> {
                           toast.close()
                       }
                   }
               }
           }
       },
        mounted() {
           this.execAutoClose()
            this.updateStyle()
        },
        methods: {
           updateStyle() {
               this.$nextTick(()=> {
                   console.log(this.$refs.wrapper.getBoundingClientRect().height)
                   this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
               })
           },
            execAutoClose() {
                if(this.autoClose) {
                    setTimeout(()=> {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
              },
           close() {
               this.$el.remove()
               this.$destroy()
           },
            clickClose() {
               this.close()
                this.closeButton.callback()
            }
        }
    }
</script>
<style lang="scss" scoped>
    .toast {
        border: 1px solid red;
        position: fixed;
        min-height: 40px;
        line-height: 1.8;
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
    .close {
        padding-left:16px;
        flex-shrink: 0;
    }
    .line {
        height: 100%;
        border-left:1px solid #999;
        margin-left:10px;
    }
</style>
