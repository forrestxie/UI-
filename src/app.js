import Vue from 'vue'
import Button from './button'
import Icon from './g-icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Sider from './sider'
import Toast from './toast'
import Plugin from './plugin'
import Tab from './tab'
import TabsBody from './tabs-body'
import TabsHead from './tabs-header'
import TabsItem from './tabs-item'
import TabPanel from './tabs-panel'


Vue.component('nt-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-footer', Footer)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.component('g-tab', Tab)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-panel', TabPanel)
Vue.use(Plugin)
new Vue({
    el: '#app',
    data: {
        loading1: true,
        message: 'hi',
        selectedTab: 'sports'
    },
    methods: {
        emitEvent() {
            this.loading1 = !this.loading1
        },
        emitChange(val) {
            console.log(val)
        },
        changeSelected(val) {
          this.selectedTab = val
            console.log(this.selectedTab)
        },
        showToast() {
            this.$toast('当前功能不稳定，当前功能不稳定当前功能不稳定当前功能不稳定当前功能不稳定当前功能不稳定' +
                '当前功能不稳定当前功能不稳定当前功能不稳定当前功能不稳定当前功能不稳定，情关闭', {
                closeButton: {
                    text: '知道了',
                    callback() {
                        console.log('他说知道了')
                    }
                },
                autoCloseDelay: 5,
                autoClose: false,
                position: 'center'
            })
        }
    }
})





