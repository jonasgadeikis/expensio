export default class Entry {
    constructor({
        id,
        name,
        type,
        categoryId,
        amount,
        createdAt,
    } = {}) {
        this.id = id ?? null;
        this.name = name ?? null;
        this.type = type ?? null;
        this.categoryId = categoryId ?? null;
        this.amount = amount ?? null;
        this.createdAt = createdAt ?? null;
    }
}
