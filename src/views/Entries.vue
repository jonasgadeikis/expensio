<template>
    <div class="page-container">
        <div class="card">
            <div class="card-title">
                <span>Entries</span>
                <div class="spacer" />
                <button
                    class="btn btn-primary"
                    @click="openModal('newEntryModal')"
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
        <new-entry-modal @entry:saved="getEntries" />
    </div>
</template>

<script>
import modalHandling from '../mixins/modalHandling';
import NewEntryModal from '../components/modals/NewEntryModal.vue';
import formatNumber from '../utils/formatNumber';

export default {
    name: 'Entries',
    components: {
        NewEntryModal,
    },
    mixins: [
        modalHandling,
    ],
    data: () => ({
        entries: [],
    }),
    methods: {
        formatNumber,
        getEntries() {
            return this.axios.get(`${this.CONSTANTS.API_URL}/entries`).then(response => {
                this.entries = response.data;
            });
        },
    },
    mounted() {
        this.getEntries();
    },
};
</script>
