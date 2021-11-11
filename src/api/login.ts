
import http from "@/request/request";

/* 手机号登录 */
export const phoneLogin = (data) => {
    return http(
{ url: "/userGateway/user/userLoginByMobile", method: "post" },
        data
    );
};

/* 登入页面获取公钥 - 首页 */
export const getPublicKey = (data) => {
    return http(
        { url: "/userGateway/user/getPublicKey", method: "post" },
        data
    );
};
/* 退出登入 - 首页 */
export const logoutOptions = (data) => {
    return http({ url: "/userGateway/user/loginOut", method: "post" }, data);
};