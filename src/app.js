import Vue from 'vue'
import Button from './button'
import icon from './g-icon'
import ButtonGroup from './button-group'

Vue.component('nt-button', Button)
Vue.component('g-icon', icon)
Vue.component('g-button-group', ButtonGroup)
new Vue({
    el: '#app',
    data: {
        loading1: true
    },
    methods: {
        emitEvent() {
            this.loading1 = !this.loading1
        }
    }
})
// 单元测试
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)
const expect = chai.expect
{
    const Constructor = Vue.extend(Button)
    const VM = new Constructor({
        propsData: {
            iconName: 'settings'
        }
    })
    VM.$mount()
    console.log(VM.$el,111111)
    let useElement = VM.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
}
{
    const Constructor = Vue.extend(Button)
    const VM= new Constructor({
        propsData: {
            iconName: 'settings',
            loading: true
        }
    })
    VM.$mount()
    let useElement = VM.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            iconName: 'settings',
            loading: true,
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let useElement = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(useElement)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            iconName: 'settings',
            loading: true,
            iconPosition: 'right'
        }
    })
    vm.$mount()
    let spy = chai.spy(function () {})
    vm.$on('click', spy)
    let testButton = vm.$el
    testButton.click()
    // 希望click事件被执行
    expect(spy).to.have.been.called()
    vm.$el.remove()
    vm.$destroy()
}




