<template>
    <div
        :id="dialogName"
        class="modal"
    >
        <div class="modal-content">
            <div class="card">
                <div class="card-title">
                    <span>New Entry</span>
                    <div class="spacer" />
                    <span class="cursor-pointer" @click="closeDialog(dialogName)">&times;</span>
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
                            v-model="entry.categoryId"
                        >
                            <option
                                v-for="(category, categoryIndex) in categories"
                                :key="`entry-category-${categoryIndex}`"
                                :value="category.id"
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
                        @click="closeDialog(dialogName)"
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
import dialogStateHandling from '../../mixins/dialogStateHandling';
import Entry from '../../models/Entry';

const TYPE_EXPENSE = 'expense';
const TYPE_INCOME = 'income';

export default {
    name: 'NewEntryDialog',
    mixins: [
        categoriesHandling,
        dialogStateHandling,
    ],
    data: () => ({
        dialogName: 'newEntryModal',
        types: [
            TYPE_EXPENSE,
            TYPE_INCOME,
        ],
        entry: new Entry(),
    }),
    computed: {
        isSavingDisabled() {
            return !this.entry.name || !this.entry.type || !this.entry.amount;
        },
    },
    methods: {
        resetCategory() {
            this.entry.categoryId = null;
        },
        saveEntry() {
            const newEntry = {
                ...this.entry,
                createdAt: this.moment().format(this.CONSTANTS.DATE_TIME_FORMAT),
            };

            this.axios.post(`${this.CONSTANTS.API_URL}/entries`, newEntry).then(() => {
                this.entry = new Entry();

                this.$emit('entry:saved');
                this.closeDialog(this.dialogName);
            });
        },
    },
};
</script>
