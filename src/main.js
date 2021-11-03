import Vue from 'vue'
import NavbarVue from './templates/navbar.vue'
import HomeVue from './templates/home.vue'
import WorkExpVue from './templates/workexp.vue'
import WorksVue from './templates/works.vue'
import PersonVue from './templates/person.vue'
import FooterVue from './templates/footer.vue'

new Vue({
    el: '#navbar',
    render: h => h(NavbarVue)
});
switch (location.pathname) {
    case '/': {
        new Vue({
            el: '#main',
            render: h => h(HomeVue)
        });
        document.title = 'Jin主頁';
        break;
    }
    case '/workexp.html': {
        new Vue({
            el: '#main',
            render: h => h(WorkExpVue)
        });
        document.title = 'jin工作經驗';
        break;
    }
    case '/works.html':{
        new Vue({
            el: '#main',
            render: h => h(WorksVue)
        });
        document.title = 'Jin工作作品集';
        break;
    }
    case '/person.html':{
        new Vue({
            el: '#main',
            render: h => h(PersonVue)
        });
        document.title = 'Jin個人作品集';
    }
}
new Vue({
    el: '#footer',
    render: h => h(FooterVue)
});