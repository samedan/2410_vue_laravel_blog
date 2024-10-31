import { createStore } from "vuex";
import axiosClient from "../axiosClient";

const store = createStore({
    state() {
        return {
            user: {
                data: {},
                token: null,
            },
        };
    },
    getters: {},
    actions: {
        login({ commit }, user) {
            axiosClient
                .post("/login", user)
                .then((res) => {
                    console.log(res);
                    commit("setUser", res.data);
                    return res;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        register({ commit }, user) {
            axiosClient
                .post("/register", user)
                .then((res) => {
                    commit("setUser", res.data);
                    return res;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mutations: {
        setUser(state, userData) {
            state.user.data = userData.user;
            state.user.token = userData.token;
            sessionStorage.setItem("TOKEN", userData.token);
        },
    },
});

export default store;
