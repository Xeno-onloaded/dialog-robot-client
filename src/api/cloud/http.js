import request from '@/api/cloud/request'

const http = {
    get(url,params){
        const config = {
            method:'get',
            url:url
        }
        if (params) config.params = params
        return request(config)
    },
    post(url,params){
        const config = {
            method: 'post',
            url:url,
            data: params,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        if (params) config.data = params
        return request(config)
    }
}
export default http