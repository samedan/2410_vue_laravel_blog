<template>
    <div class="w-full flex justify-center mt-20">
        <form
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            @submit="createPost"
        >
            <div class="mb-4">
                <label
                    for="title"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >Title</label
                >
                <input
                    type="text"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    v-model="post.title"
                    placeholder="Title"
                />
            </div>
            <div class="mb-4">
                <label
                    for="content"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >Content</label
                >
                <input
                    type="text"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="content"
                    v-model="post.content"
                    placeholder="Content"
                />
            </div>
            <div class="mb-4">
                <label
                    for="content"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >Image URL</label
                >
                <input
                    type="text"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="image"
                    v-model="post.image"
                    placeholder="Image"
                />
            </div>
            <div class="mb-4 flex justify-center">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                    Create Post
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import router from "../router";
import store from "../store";
const post = {
    title: "",
    content: "",
    image: "",
};
function createPost(e) {
    e.preventDefault();
    store.dispatch("createPost", post);
}
</script>
