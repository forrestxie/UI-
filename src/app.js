import Vue from 'vue'
import Button from './button'
import icon from './g-icon'
import ButtonGroup from './button-group'

Vue.component('nt-button',Button)
Vue.component('g-icon', icon)
Vue.component('g-button-group', ButtonGroup)
new Vue({
    el: '#app',
    data: {
        loading1: true
    }

})
