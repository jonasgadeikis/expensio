<template>
    <div class="page-container">
        <div class="card">
            <div class="card-title">
                <span>Categories</span>
                <div class="spacer" />
                <button
                    class="btn btn-primary"
                    @click="openModal('newCategoryModal')"
                >
                    New Category
                </button>
            </div>
            <div class="card-body">
                <template v-if="categories.length">
                    <div
                        class="card card-flat card-bordered mb-5"
                        v-for="(category, categoryIndex) in categories"
                        :key="categoryIndex"
                    >
                        <div class="card-title">{{ category.name }}</div>
                        <div class="card-subtitle">Limit: {{ category.limit }} $</div>
                    </div>
                </template>
                <div v-else>
                    <span>There are no categories yet.</span>
                </div>
            </div>
        </div>
        <new-category-modal @category:saved="getCategories" />
    </div>
</template>

<script>
import categoriesHandling from '../mixins/categoriesHandling';
import modalHandling from '../mixins/modalHandling';
import NewCategoryModal from '../components/modals/NewCategoryModal.vue';

export default {
    name: 'Categories',
    components: {
        NewCategoryModal,
    },
    mixins: [
        categoriesHandling,
        modalHandling,
    ],
};
</script>
