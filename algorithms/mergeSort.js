async function mergeSort(array, bars, speed) {
    const delay = (ms) => new Promise(res => setTimeout(res, ms));
  
    async function merge(left, mid, right) {
      const n1 = mid - left + 1;
      const n2 = right - mid;
  
      let L = array.slice(left, mid + 1);
      let R = array.slice(mid + 1, right + 1);
  
      let i = 0, j = 0, k = left;
  
      while (i < n1 && j < n2) {
        bars[k].style.backgroundColor = "yellow";
        await delay(speed);
  
        if (L[i] <= R[j]) {
          array[k] = L[i];
          bars[k].style.height = `${L[i]}px`;
          i++;
        } else {
          array[k] = R[j];
          bars[k].style.height = `${R[j]}px`;
          j++;
        }
        k++;
      }
  
      while (i < n1) {
        bars[k].style.backgroundColor = "orange";
        await delay(speed);
        array[k] = L[i];
        bars[k].style.height = `${L[i]}px`;
        i++; k++;
      }
  
      while (j < n2) {
        bars[k].style.backgroundColor = "orange";
        await delay(speed);
        array[k] = R[j];
        bars[k].style.height = `${R[j]}px`;
        j++; k++;
      }
  
      for (let m = left; m <= right; m++) {
        bars[m].style.backgroundColor = "green";
      }
    }
  
    async function sort(left, right) {
      if (left < right) {
        const mid = Math.floor((left + right) / 2);
        await sort(left, mid);
        await sort(mid + 1, right);
        await merge(left, mid, right);
      }
    }
  
    await sort(0, array.length - 1);
  }
  