import { createRouter, createWebHashHistory } from "vue-router";
import Beranda from '../pages/beranda.vue'
import Musik from '../pages/Musik.vue'
import Kisah from '../pages/Kisah.vue'
import ShowKisah from '../pages/ShowKisah.vue'
import Sholawat from '../pages/Solawat.vue'
const routes = [
    {
        path: '/',
        name: 'beranda',
        component: Beranda,
    },
    {
        path: '/musik',
        name: 'musik',
        component: Musik,
    },
    {
        path: '/kisah',
        name: 'kisah',
        component: Kisah,
    },
    {
        path: '/kisah/:id',
        name: 'kisah.show',
        component: ShowKisah,
    },
    {
        path: '/solawat',
        name: 'solawat',
        component: Sholawat,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;