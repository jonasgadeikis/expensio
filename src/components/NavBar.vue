<template>
    <nav class="nav-bar">
        <div class="nav-bar-content">
            <router-link to="/">
                <span class="nav-bar-title">Expensio</span>
            </router-link>
            <div class="spacer" />
            <div class="nav-bar-links">
                <router-link to="/categories">
                    <span class="nav-bar-link">Categories</span>
                </router-link>
                <router-link to="/entries">
                    <span class="ml-3 nav-bar-link">Entries</span>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
};
</script>
