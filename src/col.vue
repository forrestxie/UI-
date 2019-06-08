<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
   export default {
       name: 'Gulu-Col',
       props:{
           span: {
               type: Number,
           },
           offset: {
               type: Number
           }
       },
       data() {
           return {
               gutter: 0,
           }
       },
       computed:{
           colStyle(){
               return {
                   paddingLeft: this.gutter/2 + 'px',
                   paddingRight: this.gutter/2 + 'px'
               }
           },
           colClass() {
               let { span, offset } = this
               return [span && `col-${ span }`,offset && `offset-${ offset }`]
           }
       }
   }
</script>
<style scoped lang="scss">
    .colDiv{
        height: inherit;
        border: 1px solid green;
    }
    .col {
        width: 100%;
        height: 100px;
        $class: col-;

        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n / 24) * 100%;
            }
        }

        $offset: offset-;
        @for $n from 1 through 24 {
            &.#{$offset}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
</style>
