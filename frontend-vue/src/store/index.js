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
            return axiosClient
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
            return axiosClient
                .post("/register", user)
                .then((res) => {
                    commit("setUser", res.data);
                    return res;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        logout({ commit }) {
            commit("setUser", {
                user: {},
                token: null,
            });
            sessionStorage.removeItem("TOKEN");
        },
        createPost({ commit }, post) {
            return axiosClient
                .post("/posts", post)
                .then((res) => {
                    console.log(res);
                    return res;
                })
                .catch((err) => {
                    console.log(err);
                    return err;
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
