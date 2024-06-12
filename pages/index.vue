<template>
    <MainLayout>
        <div id="IndexPage" class="w-full custom-scrollbar">
            <div class="mx-auto max-w-[500px]">
                <div id="Posts" class="px-4 max-w-[600px] mx-auto">
                    <div class="text-white" v-if="isPosts" v-for="post in posts" :key="post">
                        <Post :post="post" @is-deleted="posts = []"></Post>
                        <Post :post="post" @is-deleted="posts = []"></Post>
                        <Post :post="post" @is-deleted="posts = []"></Post>
                        <Post :post="post" @is-deleted="posts = []"></Post>
                    </div>
                </div>
            </div>
        </div>
        INDEX
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue'
import { useUserStore } from '#imports'
const userStore = useUserStore()

const posts = ref([])
const isPosts = ref(true)
const isLoading = ref(false)

onBeforeMount(() => {
    posts.value = [
        {
            name: 'Nick Smith Dev',
            image: 'https://placehold.co/100',
            text: 'This is the title',
            picture: 'https://placehold.co/100',
        },
    ]
})
</script>

<style>
.custom-scrollbar {
    overflow: auto; /* 保持滚动功能 */
}

/* 定义滚动条的宽度和背景色 */
.custom-scrollbar::-webkit-scrollbar {
    width: 12px; /* 纵向滚动条的宽度 */
    height: 12px; /* 横向滚动条的高度 */
}

/* 滚动条的轨道（背景） */
.custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* 滚动条的滑块 */
.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 6px;
}

/* 滑块在悬停时的颜色 */
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>
