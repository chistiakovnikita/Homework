import "./main.scss";

let arr = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];

function treesum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (Array.isArray(item)) {
            result += treesum(item);
        } else {
            result += item;
        }
    }
    return result;
}

console.log(treesum(arr));



