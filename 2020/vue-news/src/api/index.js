import axios from 'axios';

const config = {
    baseUrl : "https://api.hnpwa.com/v0",
}

const fetchNewsItems = () => axios.get(`${config.baseUrl}/news/1.json`);

const fetchJobsItems = () => axios.get(`${config.baseUrl}/jobs/1.json`);

const fetchAskItems = () => axios.get(`${config.baseUrl}/ask/1.json`);

const fetchUserInfo = (username) => axios.get(`${config.baseUrl}/user/${username}.json`);

const fetchItemInfo = (id) => axios.get(`${config.baseUrl}/item/${id}.json`);

export {
    fetchNewsItems,
    fetchJobsItems,
    fetchAskItems,
    fetchUserInfo,
    fetchItemInfo,
}