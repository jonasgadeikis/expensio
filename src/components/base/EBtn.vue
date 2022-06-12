<template>
    <button
        class="btn"
        :class="{
            'btn-primary': color === 'primary',
            'btn-outlined': outlined,
        }"
        @click="$emit('click')"
    >
        <slot />
    </button>
</template>

<script>
export default {
    name: 'EBtn',
    props: {
        color: {
            type: String,
            default: '',
            validator: value => [
                'primary',
            ].includes(value),
        },
        outlined: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
