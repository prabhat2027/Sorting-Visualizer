async function insertionSort(array, bars, speed) {
    const delay = (ms) => new Promise(res => setTimeout(res, ms));
  
    for (let i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;
  
      bars[i].style.backgroundColor = "yellow";
      await delay(speed);
  
      while (j >= 0 && array[j] > key) {
        bars[j + 1].style.height = bars[j].style.height;
        array[j + 1] = array[j];
        j--;
  
        await delay(speed);
      }
  
      bars[j + 1].style.height = `${key}px`;
      array[j + 1] = key;
  
      for (let k = 0; k <= i; k++) {
        bars[k].style.backgroundColor = "green";
      }
    }
  }
  