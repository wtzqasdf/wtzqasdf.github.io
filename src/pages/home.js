import Vue from 'vue'
import Home from '../templates/home.vue'

export default {
    init() {
        new Vue({
            el: '#home',
            render: h => h(Home)
        })
    }
}
