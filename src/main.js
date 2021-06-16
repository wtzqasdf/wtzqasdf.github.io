import Navbar from './pages/navbar.js'
import Home from './pages/home.js'
import WorkExp from './pages/workexp.js'
import Works from './pages/works.js'
import Footer from './pages/footer.js'

Navbar.init();
switch (location.pathname) {
    case '/': {
        Home.init();
        break;
    }
    case '/workexp.html': {
        WorkExp.init();
        break;
    }
    case '/works.html':{
        Works.init();
        break;
    }
}
Footer.init();