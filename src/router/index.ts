import {createRouter, createWebHistory, ErrorHandler } from'vue-router'
import beforeEach from './beforeEach';
// 在 Vue-router新版本中，需要使用createRouter来创建路由

const routes = [
    {// 404路由
        path: '/404',
        name: '404',
        component: ()=>import('/@/views/404.vue')
    },
    // 后端管理系统路由组
    /*{
        path: "/admin",
        redirect: "/admin/home",
        name: "admin",
        component: () => import("/@/views/admin.vue"),
        children: [
            {
                // requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
            }
        ]
    }*/
];
/**
 * 创建路由
 */
const router = createRouter({
    // hash模式：createWebHashHistory，
    // history模式：createWebHistory
    history: createWebHistory('/'),
    // 路由地址
    routes
})
/**
 * 路由守卫
 */
router.beforeEach((guard) => {
    beforeEach.checkAuth(guard, router);
});
router.onError((handler: ErrorHandler) =>{
    console.log("error:", handler);
})

export default router