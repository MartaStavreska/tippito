import {createRouter,createWebHistory} from 'vue-router'
import HomePage from './components/Project-1/Home-page.vue'
import InfoPage from './components/Project-1/Info-page.vue'
import SearchPage from './components/Project-1/Search-page.vue'
import HomeFromSecondProject from './components/Project-2/src-components/Home.vue'
import About from './components/Project-2/Pages/About.vue'
import Investors from './components/Project-2/Pages/Investors.vue'
import Team from './components/Project-2/Pages/Team.vue'
import Help from './components/Project-2/Pages/Help.vue'



const router = createRouter({
    history: createWebHistory(),
    routes:
    [
        {path:'/',component:HomePage, name:HomePage},
        {path:'/info',component:InfoPage, name:InfoPage},
        {path:'/search',component:SearchPage, name:SearchPage},
        {path:'/tippito', component: HomeFromSecondProject},
        {path:'/tippito/about', component: About},
        {path:'/tippito/team', component: Team},
        {path:'/tippito/help', component: Help},
        {path:'/tippito/investors', component: Investors},
    ]
});

export default router;