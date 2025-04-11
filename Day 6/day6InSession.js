// In Session

// ! Implement bubble sort on an array of integers.
function bubbleSort(arr = []) {
    console.log(arr);
    let isSwapped = false;
    let itr = 0;
    let count = 0;
    do {
      // O(n**2)
      isSwapped = false;
      for (let ind = 1; ind < arr.length - itr; ind++) {
        count++;
        if (arr[ind - 1] > arr[ind]) {
          let temp = arr[ind - 1];
          arr[ind - 1] = arr[ind];
          arr[ind] = temp;
          isSwapped = true;
        }
      }
      itr++;
    } while (isSwapped);
    console.log(count);
    console.log(arr);
  }
  // bubbleSort([44, 44, 41, 40, 26, 25, 12, 11, 11, 8]);
  // ! Sort an array using selection sort.
  function selectionSort(arr = []) {
    console.log(arr);
    let count = 0;
    for (let ind = 0; ind < arr.length; ind++) {
      let minInd = ind;
      for (let index = ind + 1; index < arr.length; index++) {
        count++;
        if (arr[minInd] > arr[index]) minInd = index;
      }
      if (minInd != ind) {
        [arr[minInd], arr[ind]] = [arr[ind], arr[minInd]];
      }
    }
    console.log(count);
    console.log(arr);
  }
  // selectionSort([44, 45, 41, 40, 26, 25, 12, 16, 11, 8]);
  // ! Implement insertion sort on an array of integers.
  function insertionSort(arr = []) {
    console.log(arr);
  
    for (let ind = 1; ind < arr.length; ind++) {
      let temp = arr[ind];
      let index;
  
      for (index = ind - 1; index >= 0 && arr[index] > temp; index--) {
        arr[index + 1] = arr[index];
      }
      arr[index + 1] = temp;
    }
    console.log(arr);
  }
  // insertionSort(
  //   [44, 45, 41, 40, 26, 25, 12, 16, 11, 8].sort(() => Math.random() - 0.5)
  // );
  
  // ! Sort an array of integers in descending order.
  function insertionSortDESC(arr = []) {
    console.log(arr);
  
    for (let ind = 1; ind < arr.length; ind++) {
      let temp = arr[ind];
      let index;
  
      for (index = ind - 1; index >= 0 && arr[index] < temp; index--) {
        arr[index + 1] = arr[index];
      }
      arr[index + 1] = temp;
    }
    console.log(arr);
  }
  function selectionSortDESC(arr = []) {
    console.log(arr);
    let count = 0;
    for (let ind = 0; ind < arr.length; ind++) {
      let minInd = ind;
      for (let index = ind + 1; index < arr.length; index++) {
        count++;
        if (arr[minInd] < arr[index]) minInd = index;
      }
      if (minInd != ind) {
        [arr[minInd], arr[ind]] = [arr[ind], arr[minInd]];
      }
    }
    console.log(count);
    console.log(arr);
  }
  function bubbleSortDESC(arr = []) {
    console.log(arr);
    let isSwapped = false;
    let itr = 0;
    let count = 0;
    do {
      // O(n**2)
      isSwapped = false;
      for (let ind = 1; ind < arr.length - itr; ind++) {
        count++;
        if (arr[ind - 1] < arr[ind]) {
          let temp = arr[ind - 1];
          arr[ind - 1] = arr[ind];
          arr[ind] = temp;
          isSwapped = true;
        }
      }
      itr++;
    } while (isSwapped);
    console.log(count);
    console.log(arr);
  }
  // ! Find the median of a sorted array.
  function median(arr = []) {
    if (arr.length % 2 == 0) {
      return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
    }
    return arr[Math.floor(arr.length / 2)];
  }
  // console.log(median([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  // console.log(median([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
  // ! Sort an array of strings by their lengths.
  function stringSortByLength(arr = []) {
    console.log(arr);
    for (let ind = 0; ind < arr.length; ind++) {
      let minlen = ind;
      for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
        if (arr[minlen].length > arr[ind1].length) {
          minlen = ind1;
        }
      }
      if (ind != minlen) [arr[minlen], arr[ind]] = [arr[ind], arr[minlen]];
    }
    console.log(arr);
  }
  // stringSortByLength("todo Sort an array using merge sort".split(" "));
  // ! Sort an array of 0s, 1s, and 2s (Dutch National Flag problem).
  function dutchNationalFlag(arr = []) {
    let left = 0;
    let mid = 0;
    let right = arr.length - 1;
    console.log(arr);
    while (mid <= right) {
      if (arr[mid] == 1) {
        mid++;
      } else if (arr[mid] == 0) {
        [arr[mid], arr[left]] = [arr[left], arr[mid]];
        mid++;
        left++;
      } else {
        [arr[mid], arr[right]] = [arr[right], arr[mid]];
        right--;
      }
    }
    console.log(arr);
  }
  dutchNationalFlag([0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2])