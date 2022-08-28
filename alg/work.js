// let arr = [1, 4, 5, 6, 7, 0];
// let count = 0;

// function lineSearch(arr, item){
// count += 1;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] === item){
//             return i;
//         }
//     }
//     return null;
// }

// console.log(lineSearch(arr, 7))
// console.log(count)



// let arr = [1, 2, 3, 4, 5, 6];
// let count = 0;

// function binarySearch(arr, item){
//     count += 1;
//     let start = 0;
//     let end = arr.length;
//     let middle;
//     let found = false;
//     let position = -1;
//     while (found === false && start <= end){
//         middle = Math.floor((start + end) / 2);
//         if(arr[middle] === item){
//             found = true;
//             position = middle;
//             return position;
//         }
//         if (item < arr[middle]) {
//             end = middle - 1;
//         } else{
//             start = middle + 1;
//         }
//     }
//     return position;
// }

// console.log(binarySearch(arr, 5))
// console.log(count)



const arr = [1, -4, 9, 4, 5, 6, 7, 0];
let count = 0;

function selectSort(array){
        for (let i = 0; i < array.length; i++){
          let indexMin = i;
          for (let j = i+1; j < array.length; j++) {//заменяет элемент из внешнего цикла
           if (array[j] < array[indexMin]){ // переменная хронящая минимальный индекс числа в мвссиве
            indexMin = j;
           }
           count += 1;
        }
            let tmp = array[i]; // запоминаем индекс минимального числа
            array[i] = array[indexMin];
            array[indexMin] = tmp;
        }
        return array;
}

console.log(selectSort(arr))
console.log(count)
