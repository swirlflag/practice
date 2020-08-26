import axios from 'axios';

const config = {
    baseUrl : "https://api.hnpwa.com/v0",
}

const fetchNewsList = () => axios.get(`${config.baseUrl}/news/1.json`);
const fetchAskList = () => {
    return axios.get(`${config.baseUrl}/ask/1.json`);
    // try {
    //     return axios.get(`${config.baseUrl}/ask/1.json`);
    // }catch(error) {
    //     console.log(error)
    // }
}
const fetchJobsList = () => axios.get(`${config.baseUrl}/jobs/1.json`);

const fetchList = (pageName) => {
    try{
        return axios.get(`${config.baseUrl}/${pageName}/1.json`);
    }catch(error) {
        console.log(error)
    }
}

const fetchUserInfo = (username) => axios.get(`${config.baseUrl}/user/${username}.json`);

const fetchItemInfo = (id) => axios.get(`${config.baseUrl}/item/${id}.json`);

export {
    fetchUserInfo,
    fetchItemInfo,
    fetchList,
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
};