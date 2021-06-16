import Vue from 'vue'
import FooterVue from '../templates/footer.vue'

export default {
    init() {
        new Vue({
            el: '#footer',
            mounted() {
            },
            render: h => h(FooterVue)
        })
    }
}
