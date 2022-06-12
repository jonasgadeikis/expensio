export default {
    data: () => ({
        categories: [],
    }),
    methods: {
        getCategories() {
            return this.axios.get(`${this.CONSTANTS.API_URL}/categories`).then(response => {
                this.categories = response.data;
            });
        },
        getCategoryNameById(categoryId) {
            const category = this.categories.find(category => category.id === categoryId);

            return category ? category.name : null;
        },
    },
    mounted() {
        this.getCategories();
    },
};
