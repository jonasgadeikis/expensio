<template>
    <div class="page-container">
        <div class="card">
            <div class="card-title">
                <span>Entries</span>
                <div class="spacer" />
                <button
                    class="btn btn-primary"
                    @click="openNewEntryModal"
                >
                    New Entry
                </button>
            </div>
            <div class="card-body">
                <template v-if="entries.length">
                    <div
                        class="card card-flat card-bordered mb-5"
                        v-for="(entry, entryIndex) in entries"
                        :key="entryIndex"
                    >
                        <div class="card-title">
                            <span>
                                <span v-if="entry.category">{{ entry.category.name }} &bull; </span>
                                <span>{{ entry.name }}</span>
                            </span>
                            <div class="spacer" />
                            <span :class="entry.type === 'expense' ? 'red-color' : 'green-color'">
                                {{ entry.type === 'expense' ? '-' : '' }}{{ formatNumber(entry.amount) }} $
                            </span>
                        </div>
                    </div>
                </template>
                <div v-else>
                    <span>There are no entries yet.</span>
                </div>
            </div>
        </div>
        <new-entry-dialog @entry:saved="getEntries" />
    </div>
</template>

<script>
import axios from 'axios';
import NewEntryDialog from '../components/modals/NewEntryDialog.vue';
import formatNumber from '../utils/formatNumber';

export default {
    name: 'Entries',
    components: {
        NewEntryDialog,
    },
    data: () => ({
        entries: [],
    }),
    methods: {
        formatNumber,
        getEntries() {
            return axios.get('http://localhost:3000/entries').then(response => {
                this.entries = response.data;
            });
        },
        openNewEntryModal() {
            const modal = document.getElementById('newEntryModal');

            modal.style.display = 'block';

            // Does not work this way
            // this.$refs.newCategoryModal.style.display = 'block';
        },
    },
    mounted() {
        this.getEntries();
    },
};
</script>
