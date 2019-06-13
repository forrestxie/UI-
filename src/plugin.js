import Toast from './toast'
export default {
    install(Vue, option) {
       Vue.prototype.$toast = function (message, toastOption) {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: {
                    closeButton: toastOption.closeButton,
                    autoClose: toastOption.autoClose,
                    autoCloseDelay: toastOption.autoCloseDelay,
                    position: toastOption.position
                }
            })
           toast.$slots.default = [message]
           toast.$mount() //toast存在内存中
           document.body.appendChild(toast.$el)
        }
    }
}
