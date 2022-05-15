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
    },
    mounted() {
        this.getCategories();
    },
};
