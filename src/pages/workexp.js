import Vue from 'vue'
import WorkExpVue from '../templates/workexp.vue'

export default {
    init() {
        new Vue({
            el: '#workexp',
            render: h => h(WorkExpVue)
        })
    }
}