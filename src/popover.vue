<!--这个轮子不支持overflow：hidden,需要下方的按钮和content分离，故要重写-->
<template>
    <div class="popover" @click.stop="onclick" ref="popover">
        <div  ref="contentWrapper" @click.stop class="content-wrapper" v-show="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
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
        positionContent() {
            document.body.appendChild(this.$refs.contentWrapper)
            let {left, top, height, width} = this.$refs.triggerWrapper.getBoundingClientRect()
            this.$refs.contentWrapper.style.left = left+ window.scrollX + 'px'
            this.$refs.contentWrapper.style.top = `${top-height+window.scrollY}px`
            this.$refs.contentWrapper.style.position = 'absolute'
        },
        clickDocument(e) {
            if(this.$refs.contentWrapper.contains(event.target)) {
                return
            }
            this.close()
        },
        listenToDocument() {
            document.addEventListener('click', this.clickDocument)
            },
        close() { //所有收尾的事聚拢到一个函数
            this.visible = false
            document.removeEventListener('click', this.clickElement)
        },
        onShow() {
            this.visible = true
            this.$nextTick(()=> {
                this.positionContent()
                this.listenToDocument()
            })
        },
        onclick(event) {
            //确定用户点击的是哪个节点
            console.log(event.target)
            if(this.$refs.popover.contains(event.target)) {
               if(this.visible === true) {
                   this.close()
               } else {
                    this.onShow()
               }
            }

            // 监听及overflow：hidden的bug
            // this.visible = !this.visible
            // if(this.visible === true) {
            //     this.$nextTick(()=> {
            //         document.body.appendChild(this.$refs.contentWrapper)
            //         let {left, top, height, width} = this.$refs.triggerWrapper.getBoundingClientRect()
            //         console.log(left, top, height, width)
            //         this.$refs.contentWrapper.style.left = left+ window.scrollX + 'px'
            //         this.$refs.contentWrapper.style.top = `${top-height+window.scrollY}px`
            //         this.$refs.contentWrapper.style.position = 'absolute'
            //         let clickDocument = ()=> {
            //             console.log('监听器添加')
            //             this.visible = false
            //             document.removeEventListener('click', clickDocument)
            //         }
            //         document.addEventListener('click', clickDocument)
            //     })
            // }
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
