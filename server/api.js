
import http from "./request"
export const getlistData = ()=>{
    return http.get("http://rap2api.taobao.org/app/mock/239211/hotHouese");
}