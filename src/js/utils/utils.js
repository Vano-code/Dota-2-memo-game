export const compareFunc = (a, b) => {
    let comparison = 0;
    if (a.score > b.score) {
        comparison = 1;
    } else if (a.score < b.score) {
        comparison = -1;
    }
    return comparison;
}