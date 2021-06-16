import Vue from 'vue'
import NavbarVue from '../templates/navbar.vue'

export default {
    init() {
        new Vue({
            el: '#navbar',
            render: h => h(NavbarVue)
        })
    }
}
