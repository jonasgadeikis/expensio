<template>
    <nav-bar />
    <categories />
    <entries />
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
