<template>
   <div class="row" :style="rowStyle">
       <slot></slot>
   </div>
</template>
<script>
  export default {
      name: 'Gulu-row',
      props: {
          gutter: {
              type: [Number,String]
          }
      },
      mounted(){
          this.$children.forEach((vm)=>{
              vm.gutter = this.gutter
          })
      },
      computed: {
          rowStyle() {
              let {gutter} = this
              return {marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}
          }
      }
  }
</script>
<style lang="scss">
    .row {
        display: flex;
        flex-wrap: wrap;
    }
</style>
