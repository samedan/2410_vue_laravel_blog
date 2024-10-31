<template>
    <div class="w-full flex justify-center mt-20">
        <form
            @submit="register"
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
            <div class="mb-4">
                <h2 class="text-xl font-bold">Register Account</h2>
            </div>
            <div class="mb-4">
                <label
                    for="email"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >Name</label
                >
                <input
                    type="text"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    v-model="user.name"
                    placeholder="name"
                />
            </div>
            <div class="mb-4">
                <label
                    for="email"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >E-mail</label
                >
                <input
                    type="email"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    v-model="user.email"
                    placeholder="Email"
                />
            </div>
            <div class="mb-4">
                <label
                    for="email"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >Password</label
                >
                <input
                    type="password"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    v-model="user.password"
                    placeholder="Password"
                />
            </div>
            <div class="mb-4 flex justify-center">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                    Sign up
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import router from "../router";
import store from "../store";

const user = {
    name: "",
    email: "",
    password: "",
};

function register(e) {
    e.preventDefault();
    store
        .dispatch("register", user)
        .then(() => {
            router.push({
                name: "Dashboard",
            });
        })
        .catch((err) => {
            console.log(err);
        });
    console.log(user);
}
</script>
