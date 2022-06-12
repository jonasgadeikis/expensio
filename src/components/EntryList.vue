<template>
    <div
        class="card card-flat card-bordered mb-5"
        v-for="(entry, entryIndex) in entries"
        :key="entryIndex"
    >
        <slot
            name="entry"
            :entry="entry"
        >
            <div class="card-title">
                <span>{{ entry.name }}</span>
                <div class="spacer" />
                <span :class="entry.type === 'expense' ? 'red-color' : 'green-color'">
                    {{ entry.type === 'expense' ? '-' : '' }}{{ formatNumber(entry.amount) }} $
                </span>
            </div>
        </slot>
    </div>
</template>

<script>
import { formatNumber } from '../utils/methods';

export default {
    name: 'EntryList',
    props: {
        entries: {
            type: Array,
            required: true,
        },
    },
    methods: {
        formatNumber,
    },
};
</script>
