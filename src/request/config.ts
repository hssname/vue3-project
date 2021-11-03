
var urlConfig:any
if (process.env.NODE_ENV === 'production') {
    urlConfig = {
        baseURL: 'https://api.gzinternetcourt.gov.cn', //请求域名
        translateUrl: 'https://ghodrassess.odrcloud.cn', //语音识别路径
        audioUrl: 'https://odr.gzinternetcourt.gov.cn', //聊天室语音路径
        hostName: 'api.gzinternetcourt.gov.cn',
    }
} else {
    urlConfig = {
        baseURL: 'https://devghodrapi.odrcloud.cn', //请求域名
        translateUrl: 'https://testghodrassess.odrcloud.cn', //语音识别路径
        audioUrl: 'https://devghodrwww.odrcloud.cn', //聊天室语音路径
        hostName: 'devghodrapi.odrcloud.cn',
    }
}

export default urlConfig;