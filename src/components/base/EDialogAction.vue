<template>
    <slot v-bind="{ openDialog, closeDialog }" />
</template>

<script>
export default {
    name: 'EDialogAction',
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
</script>
