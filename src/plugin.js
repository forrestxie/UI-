import Toast from './toast'
let currentToast
export default {
    install(Vue, option) {
           Vue.prototype.$toast = function(message, toastOption){
               if(currentToast) {
                   currentToast.close() //可以直接调用内部方法
               }
               currentToast = createToast({Vue, message, propsData: toastOption}) //新建一个函数
           }
    }
}
function createToast({Vue, message,  propsData}){
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData
    })
    toast.$slots.default = [message]
    toast.$mount() //toast存在内存中
    document.body.appendChild(toast.$el)
    return toast
}
