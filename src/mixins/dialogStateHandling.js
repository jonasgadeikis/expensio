export default {
    methods: {
        openDialog(name) {
            const dialog = document.getElementById(name);

            dialog.style.display = 'block';
        },
        closeDialog(name) {
            const dialog = document.getElementById(name);

            dialog.style.display = 'none';
        },
    },
};
