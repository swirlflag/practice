<template>
    <div class="contents">
        <div class="form-wrapper form-wrapper-sm">
        <form @submit.prevent="submitForm" class="form">
            <div>
            <label for="username">id: </label>
            <input id="username" type="text" v-model="username" />
            </div>
            <div>
            <label for="password">pw: </label>
            <input id="password" type="text" v-model="password" />
            </div>
            <div>
            <label for="nickname">nickname: </label>
            <input id="nickname" type="text" v-model="nickname" />
            </div>
            <button type="submit" class="btn">회원 가입</button>
        </form>
        <p class="log">{{ logMessage }}</p>
        </div>
    </div>
</template>

<script>

import {
    API_resiserUser,
} from '@/api/index.js';

import {
    validateEmail
} from '@/utils/validation.js';

export default {
    data() {
        return {
            // form value
            username : '',
            password : '',
            nickname : '',

            // log
            logMessage : '',
        }
    },
    computed: {
        isUsernameValid() {
            return validateEmail(this.username);
        },

        isDisabledSubmit() {
            return !this.isUsernameValid || !this.password || !this.nickname
        }
    },
    methods : {
        async submitForm() {
            const userData = {
                username : this.username,
                password : this.password,
                nickname : this.nickname,
            };

            const {
                data
            } = await API_resiserUser(userData);

            this.logMessage = `${data.username} 님이 가입되었습니다.`;

            this.initForm();
        },

        initForm() {
            this.username = '';
            this.password = '';
            this.nickname = '';
        },
    }
}
</script>

<style>

</style>
