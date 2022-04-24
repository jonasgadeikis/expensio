<template>
    <div id="newCategoryModal" class="modal">
        <div class="modal-content">
            <div class="card">
                <div class="card-title">
                    <span>New Category</span>
                    <div class="spacer" />
                    <span class="cursor-pointer" @click="closeNewCategoryModal">&times;</span>
                </div>
                <div class="card-body">
                    <div class="mb-5 d-flex flex-column">
                        <label
                            for="categoryName"
                            class="input-label"
                        >
                            Name
                        </label>
                        <input
                            id="categoryName"
                            class="input-text"
                            v-model.trim="category.name"
                        >
                    </div>
                    <div class="d-flex flex-column">
                        <label
                            for="categoryLimit"
                            class="input-label"
                        >
                            Limit
                        </label>
                        <input
                            type="number"
                            id="categoryLimit"
                            class="input-text"
                            v-model.number="category.limit"
                        >
                    </div>
                </div>
                <div class="card-actions">
                    <div class="spacer" />
                    <button
                        type="button"
                        class="btn btn-primary"
                        :class="{'btn-disabled': isSavingDisabled}"
                        :disabled="isSavingDisabled"
                        @click="saveCategory"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        class="ml-3 btn btn-outlined"
                        @click="closeNewCategoryModal"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'NewCategoryModal',
    data: () => ({
        category: {
            name: null,
            limit: null,
        },
    }),
    computed: {
        isSavingDisabled() {
            return !this.category.name || !this.category.limit;
        },
    },
    methods: {
        saveCategory() {
            axios.post('http://localhost:3000/categories', this.category).then(() => {
                this.category.name = null;
                this.category.limit = null;

                this.$emit('category:saved');
                this.closeNewCategoryModal();
            });
        },
        closeNewCategoryModal() {
            const modal = document.getElementById('newCategoryModal');

            modal.style.display = 'none';

            // Works here the same as above code when ref is declared
            // this.$refs.newCategoryModal.style.display = 'none';
        },
    },
};
</script>
