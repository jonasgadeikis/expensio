<template>
    <div class="page-container">
        <div class="card">
            <div class="card-title">
                <span>Categories</span>
                <div class="spacer" />
                <button
                    class="btn btn-primary"
                    @click="openDialog('newCategoryModal')"
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
        <new-category-dialog @category:saved="getCategories" />
    </div>
</template>

<script>
import categoriesHandling from '../mixins/categoriesHandling';
import dialogStateHandling from '../mixins/dialogStateHandling';
import NewCategoryDialog from '../components/dialogs/NewCategoryDialog.vue';

export default {
    name: 'Categories',
    components: {
        NewCategoryDialog,
    },
    mixins: [
        categoriesHandling,
        dialogStateHandling,
    ],
};
</script>
