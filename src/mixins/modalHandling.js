export default {
    methods: {
        openModal(name) {
            const modal = document.getElementById(name);

            modal.style.display = 'block';
        },
        closeModal(name) {
            const modal = document.getElementById(name);

            modal.style.display = 'none';
        },
    },
};
