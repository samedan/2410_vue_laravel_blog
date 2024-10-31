<template>
    <div>
        <h1>Registered content</h1>
        <button @click="logout">Logout</button>
    </div>
</template>

<script setup>
import router from "../router";
import store from "../store";
function logout() {
    store
        .dispatch("logout")
        .then((res) => {
            router.push({
                name: "Login",
            });
        })
        .catch((err) => {
            console.log(err);
        });
}
</script>
