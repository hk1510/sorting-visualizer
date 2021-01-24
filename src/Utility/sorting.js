import { compare, modifyValue, swap, coloredSwap, setComparisons, finalize, finish } from './animation';

const copy = (l) => {
  let newL = [];
  for (let i = 0; i < l.length; i++) {
    newL.push(l[i]);
  }
  return newL;
}

export const bubbleSort = (array, interval) => {
  let newArr = copy(array);
  let sorted = false;
  let time = 0;
  let comparisons = 0;
  let iteration = 1;
  setComparisons(comparisons, time);
  while (!sorted) {
    sorted = true;
    for(let i = 0; i < newArr.length - iteration; i++) {    
      setComparisons(++comparisons, time, interval);
      if (newArr[i] > newArr[i+1]) {
        compare([i, i+1], false, ++time, interval);
        time = time + 1;
        swap([i, i+1], ++time, interval);
        let temp = newArr[i];
        newArr[i] = newArr[i+1];
        newArr[i+1] = temp;
        sorted = false;
      }
      else {
        compare([i, i+1], true, ++time, interval);
        time = time + 2;
      }
    }
    finalize(newArr.length - iteration, time, interval);
    iteration++;
  }
  time = time + 1;
  finish(time, interval);
  time = (time) * interval + 500;
  return {time, newArr};
}


const merge = (array, auxArray, start, mid, end, time, interval, comparisons) => {

  for (let k = start; k <= end; k++) {
    auxArray[k] = array[k];
  }

  let k = start; 
  let i = start;
  let j = mid + 1;
  while (i <= mid && j <= end) {
    setComparisons(++comparisons, time, interval);
    if (auxArray[i] <= auxArray[j]) {
      compare([i, j], true, ++time, interval);
      time++;
      modifyValue(k, auxArray[i], ++time, interval);
      array[k++] = auxArray[i++];
    }
    else {
      compare([i, j], false, ++time, interval);
      time++;
      modifyValue(k, auxArray[j], ++time, interval);
      array[k++] = auxArray[j++];
    }
  }
  while(i <= mid) {
    modifyValue(k, auxArray[i], ++time, interval);
    array[k++] = auxArray[i++];
  }
  while(j <= end) {
    modifyValue(k, auxArray[j], ++time, interval);
    array[k++] = auxArray[j++];
  }
  return {time, comparisons};
}


const mergeSortHelper = (array, auxArray, interval, start, end, time, comparisons) => {
  if (start === end) {
    return {time, comparisons};
  }
  let mid = Math.floor((start + end)/2);
  let firstResult = mergeSortHelper(array, auxArray, interval, start, mid, time, comparisons);
  let secondResult = mergeSortHelper(array, auxArray, interval, mid + 1, end, firstResult.time, firstResult.comparisons);
  let finalResult = merge(array, auxArray, start, mid, end, secondResult.time, interval, secondResult.comparisons);
  time = finalResult.time;
  comparisons = finalResult.comparisons;
  return {time, comparisons};
}


export const mergeSort = (array, interval) => {
  let comparisons = 0;
  let newArr = array.slice();
  let auxArray = array.slice();
  let result = mergeSortHelper(newArr, auxArray, interval, 0, array.length - 1, 0, comparisons);
  let time = result.time;
  time = time + 1;
  finish(time, interval);
  time = time * interval + 500;
  return {time, newArr};
};


const heapify = (array, n, i, time, interval, comparisons) => {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  
  if ( l < n ) {
    setComparisons(++comparisons, time, interval);
    if ( array[l] > array[largest] ) {
      compare([l, largest], false, ++time, interval);
      time++;
      largest = l;
    }
    else {
      compare([l, largest], true, ++time, interval);
      time++;
    }
  }
  if ( r < n ) {
    setComparisons(++comparisons, time, interval);
    if ( array[r] > array[largest] ) {
      compare([r, largest], false, ++time, interval);
      time++;
      largest = r;
    }
    else {
      compare([r, largest], true, ++time, interval);
      time++;
    }    
  }
  if (largest !== i) {
    let temp = array[i];
    array[i] = array[largest];
    array[largest] = temp;
    swap([i, largest], ++time, interval);
    let result = heapify(array, n, largest, time, interval, comparisons);
    time = result.time;
    comparisons = result.comparisons;
  }
  return {time, comparisons};
}


export const heapSort = (array, interval) => {
  let time = 0;
  let comparisons = 0;
  let n = array.length;

  let newArr = array.slice();

  for (let i = Math.floor(n / 2); i >= 0; i--) {
    let result = heapify(newArr, n, i, time, interval, comparisons);
    time = result.time;
    comparisons = result.comparisons;
  }
  for (let i = n - 1; i > 0; i--) {
    let temp = newArr[0];
    newArr[0] = newArr[i];
    newArr[i] = temp;
    swap([0, i], ++time, interval);
    finalize(i, ++time, interval);
    let result = heapify(newArr, i, 0, time, interval, comparisons);
    time = result.time;
    comparisons = result.comparisons;
  }
  finish(++time, interval);
  time = (time + 1) * interval + 500;
  return {time, newArr};
}


const partition = (array, low, high, time, comparisons, interval) => {
  let pivot = array[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    setComparisons(++comparisons, time, interval);
    if (array[j] < pivot) {
      compare([j, high], false, ++time, interval);
      time++;
      i++;
      coloredSwap([i, j], ++time, interval, 'yellow');
      time++;
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    else {
      compare([j, high], true, ++time, interval);
    }
  }
  coloredSwap([i + 1, high], ++time, interval, 'green');
  time++;
  let temp = array[i+1];
  array[i+1] = array[high];
  array[high] = temp;
  let pivotIndex = i + 1;
  return {pivotIndex, time, comparisons};
}

const quickSortHelper = (array, low, high, time, comparisons, interval) => {

  if (low < high) {
    let partitionResult = partition(array, low, high, time, comparisons, interval);
    let result = quickSortHelper(array, low, partitionResult.pivotIndex - 1, partitionResult.time, partitionResult.comparisons, interval);
    let nextResult = quickSortHelper(array, partitionResult.pivotIndex + 1, high, result.time, result.comparisons, interval);
    
    time = nextResult.time;
    comparisons = nextResult.comparisons;
    return{time, comparisons}
  
  }
  return {time, comparisons};
}

export const quickSort = (array, interval) => {
  console.log(array);
  let time = 0;
  let comparisons = 0;
  let newArr = array.slice();
  let result = quickSortHelper(newArr, 0, newArr.length - 1, time, comparisons, interval);
  time = result.time;
  finish(++time, interval);
  time = (time + 1) * interval + 500;
  return {time, newArr};
}




//OLD VERSION
// export const sort = (array) => {
//   let newArr = copy(array);
//   let animationArr = [];
//   let sorted = false;
//   while (!sorted) {
//     sorted = true;
//     for(let i = 0; i < newArr.length - 1; i++) {
//       animationArr.push([i, i+1, 'compare']);
//       if (newArr[i].number > newArr[i+1].number) {
//         animationArr.push([i, i+1, 'swap']);
//         let temp = newArr[i].number;
//         newArr[i].number = newArr[i+1].number;
//         newArr[i+1].number = temp;
//         sorted = false;
//       }
//     }
//   }
//   return {animationArr, newArr};
// }