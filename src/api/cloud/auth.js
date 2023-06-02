import axios from 'axios';
import http from "@/api/cloud/http";

//获取AccessToekn
const getAccessToken = ()=> {
    const appId = '17587865'
    const appSecret = '08eb7d2a6336c7c7bcb7bbbf8768d579'
    const url = '/api/token/get'
    const config = {
        headers: {
            'appId': appId,
            'appSecret': appSecret
        }
    }
    return axios.get(url, config)
        .then(res=> sessionStorage.setItem("accessToken",res.data.data.accessToken))
}

//获取uid
const getUidByAccount = (mobile) => {
    return http.get("/auth/getToken",
        {account:mobile})
}

//获取当前登录用户部门列表
const getDeptListByUid = () => {
    return http.get("/user/deptList",
        {uid:sessionStorage.getItem("uid")})
}

//获取当前登录用户个人信息
const getUserInfoByUid = () => {
    return http.get("/user/getUserInfo",
        {uid:sessionStorage.getItem("uid")})
}

//获取部门列表
const getDeptList = () => {
    return http.get("/department/deptList",
        {deptId:0})
}

//获取企业群信息列表
const getGroupList = () => {
    return http.get("/contact/group")
}

//获取当前部门下人员列表
const getDeptPersonList = () => {
    return http.get("/department/userList",{
        deptId:sessionStorage.getItem("deptId")
    })
}
export {
    getAccessToken,
    getUidByAccount,
    getUserInfoByUid,
    getDeptListByUid,
    getDeptList,
    getGroupList,
    getDeptPersonList
}