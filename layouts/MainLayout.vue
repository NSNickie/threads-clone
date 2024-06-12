<template>
    <div id="MainLayout" class="h-screen">
        <div class="w-full max-w-[500px] mx-auto">
            <div id="TopMenu" class="w-full flex items-center justify-center px-2 h-10 my-2">
                <img src="/threads-logo.png" class="w-[35px]" />
            </div>
        </div>

        <div class="flex w-full max- max-w-[500px] mx-auto h-screen">
            <slot></slot>
        </div>

        <div
            id="BootomNav"
            class="fixed z-50 bottom-0 flex w-full h-[70px] border-t border-t-gray-700 bg-black"
        >
            <div class="flex w-full max-w-[500px] mx-auto items-center justify-around">
                <button @click="navigateTo('/')" class="w-full h-full">
                    <Icon name="dashicons:admin-home" size="35" color="#ffffff"></Icon>
                </button>
                <button @click="userStore.isMenuOverlay = true" class="w-full h-full">
                    <Icon name="dashicons:welcome-write-blog" size="32" color="#ffffff"></Icon>
                </button>
                <button @click="userStore.isLogoutOverlay = true" class="w-full h-full">
                    <Icon class="mb-1" name="dashicons:exit" size="32" color="#ffffff"></Icon>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()
</script>

<style lang="scss" scoped></style>
