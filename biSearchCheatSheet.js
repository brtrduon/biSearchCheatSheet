let array = [3, 4, 12, 199, 200, 34, 35, 23, 3, 5];

function binary_search(arr, value) {
  let high = arr.length - 1;
  let low = 0;
  let mid = 0;

  while(low <= high) {
    mid = Math.floor((high + low) / 2);
    // if middle === value being searched
    if (arr[mid] === value) {
      // return value
      return arr[mid];
    } else if (value > arr[mid]) {
      // move the low up one
      low = mid + 1;
    } else {
      // move the high down one
      high = mid - 1;
    }
  }

  // if nothing is found
  return -1;
}