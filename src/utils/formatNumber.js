export default (number, fraction = 2) => {
    if (!number) {
        return Number(0).toFixed(fraction);
    }

    return Number(number).toFixed(fraction);
}
