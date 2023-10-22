const arr = [82, 12, 94, 37, 61, 51, 11, 25, 34];
descendingSort(arr);
console.log(arr);


function descendingSort(arr) {
    const n = arr.length;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}