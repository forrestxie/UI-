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
// 单元测试
import chai from 'chai'
const expect = chai.expect
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            iconName: 'settings'
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
}
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            iconName: 'settings',
            loading: true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            iconName: 'settings',
            loading: true,
            iconPosition: 'right'
        }
    })
    button.$mount(div)
    let useElement = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(useElement)
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            iconName: 'settings',
            loading: true,
            iconPosition: 'right'
        }
    })
    button.$mount()
    button.$on('click',function () {
        console.log(1)
    })
    let testButton = button.$el
    testButton.click()
    // 希望click事件被执行
    button.$el.remove()
    button.$destroy()
}




