<template>
    <nav-bar />
    <router-view v-slot="{ Component, route }">
        <transition name="slide-fade" mode="out-in">
            <component :is="Component" :key="route.path" />
        </transition>
    </router-view>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Categories from './views/Categories.vue';
import Entries from './views/Entries.vue';

export default {
    components: {
        NavBar,
        Categories,
        Entries,
    },
};
</script>
