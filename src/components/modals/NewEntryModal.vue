<template>
    <div
        :id="modalName"
        class="modal"
    >
        <div class="modal-content">
            <div class="card">
                <div class="card-title">
                    <span>New Entry</span>
                    <div class="spacer" />
                    <span class="cursor-pointer" @click="closeModal(modalName)">&times;</span>
                </div>
                <div class="card-body">
                    <div class="mb-5 d-flex flex-column">
                        <label
                            for="entryName"
                            class="input-label"
                        >
                            Name
                        </label>
                        <input
                            id="entryName"
                            class="input-text"
                            v-model.trim="entry.name"
                        >
                    </div>
                    <div class="mb-5 d-flex flex-column">
                        <label
                            for="entryType"
                            class="input-label"
                        >
                            Type
                        </label>
                        <select
                            id="entryType"
                            class="input-select text-capitalize"
                            v-model="entry.type"
                            @change="resetCategory"
                        >
                            <option
                                v-for="(type, typeIndex) in types"
                                :key="`entry-type-${typeIndex}`"
                                class="text-capitalize"
                            >
                                {{ type }}
                            </option>
                        </select>
                    </div>
                    <div
                        v-if="entry.type === 'expense'"
                        class="mb-5 d-flex flex-column"
                    >
                        <label
                            for="entryCategory"
                            class="input-label"
                        >
                            Category
                        </label>
                        <select
                            id="entryCategory"
                            class="input-select"
                            v-model="entry.category"
                        >
                            <option
                                v-for="(category, categoryIndex) in categories"
                                :key="`entry-category-${categoryIndex}`"
                                :value="category"
                            >
                                {{ category.name }}
                            </option>
                        </select>
                    </div>
                    <div class="d-flex flex-column">
                        <label
                            for="entryAmount"
                            class="input-label"
                        >
                            Amount
                        </label>
                        <input
                            type="number"
                            id="entryAmount"
                            class="input-text"
                            v-model.number="entry.amount"
                        >
                    </div>
                </div>
                <div class="card-actions">
                    <div class="spacer" />
                    <button
                        type="button"
                        class="btn btn-primary"
                        :class="{'btn-disabled': isSavingDisabled}"
                        :disabled="isSavingDisabled"
                        @click="saveEntry"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        class="ml-3 btn btn-outlined"
                        @click="closeModal(modalName)"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import categoriesHandling from '../../mixins/categoriesHandling';
import modalHandling from '../../mixins/modalHandling';

const TYPE_EXPENSE = 'expense';
const TYPE_INCOME = 'income';

export default {
    name: 'NewEntryDialog',
    mixins: [
        categoriesHandling,
        modalHandling,
    ],
    data: () => ({
        modalName: 'newEntryModal',
        types: [
            TYPE_EXPENSE,
            TYPE_INCOME,
        ],
        entry: {
            name: null,
            type: null,
            category: null,
            amount: null,
        },
    }),
    computed: {
        isSavingDisabled() {
            return !this.entry.name || !this.entry.type || !this.entry.amount;
        },
    },
    methods: {
        resetCategory() {
            this.entry.category = null;
        },
        saveEntry() {
            this.axios.post(`${this.CONSTANTS.API_URL}/entries`, this.entry).then(() => {
                this.entry.name = null;
                this.entry.type = null;
                this.entry.category = null;
                this.entry.amount = null;

                this.$emit('entry:saved');
                this.closeModal(this.modalName);
            });
        },
    },
};
</script>
