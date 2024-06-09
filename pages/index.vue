<template>
    <MainLayout>
        <div id="IndexPage" class="w-full overflow-auto">
            <div class="mx-auto max-w-[500px] overflow-hidden">
                <div id="Posts" class="px-4 max-w-[600px] mx-auto">
                    <div class="text-white" v-if="isPosts" v-for="post in posts" :key="post">
                        {{ post }}
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
