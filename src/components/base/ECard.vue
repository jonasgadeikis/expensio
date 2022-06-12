<template>
    <div class="card">
        <div class="card-title">
            <slot name="title" />
        </div>
        <div class="card-body">
            <slot />
        </div>
        <div class="card-actions">
            <slot name="actions" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'ECard',
};
</script>
