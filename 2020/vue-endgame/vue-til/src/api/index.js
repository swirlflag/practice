import axios from 'axios';
import { setInterceptors } from './common/interceptor.js';

// axios 초기화
const instance = setInterceptors(
    axios.create({
        baseURL: process.env.VUE_APP_API_URL,
    })
);

// 회원가입 API
function registerUser(userData) {
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

// 학습노트 데이터 조회 API

const fetchPosts = () => {
    return instance.get('posts')
}

export { registerUser, loginUser , fetchPosts };
