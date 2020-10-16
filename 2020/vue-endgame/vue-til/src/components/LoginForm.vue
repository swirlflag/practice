<template>
    <form @submit.prevent="submitForm">
        <div>
            <label for="username">id : </label>
            <input id="username" type="text" v-model="username">
        </div>
        <div>
            <label for="password">pw : </label>
            <input id="password" type="text" v-model="password">
        </div>
        <button :disabled="isDisabledSubmit" type="submit">login</button>
        <p>
            {{ logMessage }}
        </p>
    </form>
</template>

<script>

import {
    API_loginUser
} from '@/api';

import {
    validateEmail
} from '@/utils/validation.js';

export default {
    data() {
        return {
            // form value
            username : '',
            password : '',

            // log
            logMessage : '',
        }
    },
    computed : {
        isUsernameValid() {
            return validateEmail(this.username);
        },

        isDisabledSubmit() {
            return !this.isUsernameValid || !this.password
        }
    },
    methods : {
        initForm() {
            this.username = '';
            this.password = '';
        },
        async submitForm() {
            try {
                const loginData = {
                    username : this.username,
                    password : this.password,
                }
                const { data } = await API_loginUser(loginData);

                this.logMessage = `${data.user.username} 님 환영합니다.`;
            } catch (error) {
                this.logMessage = error.response.data;
            } finally {
                this.initForm();
            }

        },
    }
}
</script>

<style>

</style>