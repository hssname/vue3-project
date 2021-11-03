import { Router } from "vue-router";
const beforeEach = {
    /**
     * 路由守卫检查权限
     * @param guard
     * @param router
     */
    checkAuth(guard: any, router: Router){
        //检查路由是否存在
        if(!router.hasRoute(guard.name)){
            if(guard.fullPath.indexOf("/frame") >=0){
                router.push("/404");
            } else if(guard.fullPath.indexOf("/pages") >=0){
                router.push("/404")
            } else{
                router.push("/404")
            }
            return
        }
    }
}

export default beforeEach