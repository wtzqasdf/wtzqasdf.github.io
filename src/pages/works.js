import Vue from 'vue'
import WorksVue from '../templates/works.vue'

export default {
    init() {
        new Vue({
            el: '#works',
            render: h => h(WorksVue)
        })
    }
}