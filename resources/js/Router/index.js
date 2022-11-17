import {createWebHistory,createRouter} from 'vue-router'
import Home from '../pages/Home.vue'
import Store from '../Pages/Store.vue'
import POS from '../Pages/POS.vue'
import Report from '../Pages/Report.vue'
import Transection from '../Pages/Transection.vue'
import Nopage from '../Pages/Nopage.vue'

export const routes=[
    {
        name:"Home",
        path:"/",
        component:Home
    },
     {
        name:"Store",
        path:"/store",
        component:Store
    },
    {
        name:"POS",
        path:"/pos",
        component:POS
    },
    {
        name:"Report",
        path:"/report",
        component:Report
    },
    {
        name:"Transection",
        path:"/transection",
        component:Transection
    },
    {
        name:"Nopage",
        path:"/:catchAll(.*)",
        component:Nopage
    }
];
const router=createRouter({
    history:createWebHistory(),
    routes:routes,
    scrollBehavior(){
        window.scrollTo(0,0);
    }
});
export default router;