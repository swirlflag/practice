import axios from 'axios';

const config = {
    baseUrl : "https://api.hnpwa.com/v0",
}

const fetchList = (pageName) => axios.get(`${config.baseUrl}/${pageName}/1.json`);

const fetchUserInfo = (username) => axios.get(`${config.baseUrl}/user/${username}.json`);

const fetchItemInfo = (id) => axios.get(`${config.baseUrl}/item/${id}.json`);

export {
    fetchUserInfo,
    fetchItemInfo,
    fetchList,
};