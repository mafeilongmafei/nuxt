
import http from "./request"
export const getlistData = ()=>{
    return http.get("http://rap2api.taobao.org/app/mock/239211/hotHouese");
}

export const getBannerList = () =>{
    return http.get("http://rap2.taobao.org:38080/app/mock/239211/banner");
}