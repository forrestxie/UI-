import Vue from 'vue'
import Button from './button'
import icon from './g-icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('nt-button', Button)
Vue.component('g-icon', icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
new Vue({
    el: '#app',
    data: {
        loading1: true,
        message: 'hi'
    },
    methods: {
        emitEvent() {
            this.loading1 = !this.loading1
        },
        emitChange(val) {
            console.log(val)
        }
    }
})





