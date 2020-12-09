import {createRouter,createWebHistory} from 'vue-router'
import HomePage from './components/Home-page.vue'
import InfoPage from './components/Info-page.vue'
import SearchPage from './components/Search-page.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:
    [
        {path:'/',component:HomePage, name:HomePage},
        {path:'/info',component:InfoPage, name:InfoPage},
        {path:'/search',component:SearchPage, name:SearchPage}
    ]
});

export default router;