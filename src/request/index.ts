import baseRequest from './request';

function request(url:any, option:any) {
    if (!url || typeof url !== 'string') return;
    const { methods = 'get', query = {}, header = {} } = option || {};

    switch (methods.toLowerCase()) {
        case 'put':
            return baseRequest.put(url, query, {
                headers: header
            });
        case 'head':
            return baseRequest.head(url, {
                params: query,
                headers: header
            });
        case 'post':
            return baseRequest.post(url, query, {
                headers: header
            });
        case 'delete':
            return baseRequest.delete(url, {
                params: query,
                headers: header
            });
        case 'options':
            return baseRequest.options(url, {
                params: query,
                headers: header
            });
        default:
            return baseRequest.get(url, {
                params: query,
                headers: header
            });
    }
}

export default request;