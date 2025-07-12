async function selectionSort(array, bars, speed) {
    const delay = (ms) => new Promise(res => setTimeout(res, ms));
  
    for (let i = 0; i < array.length; i++) {
      let minIdx = i;
      bars[minIdx].style.backgroundColor = "orange";
  
      for (let j = i + 1; j < array.length; j++) {
        bars[j].style.backgroundColor = "yellow";
        await delay(speed);
  
        if (array[j] < array[minIdx]) {
          if (minIdx !== i) bars[minIdx].style.backgroundColor = "steelblue";
          minIdx = j;
          bars[minIdx].style.backgroundColor = "orange";
        } else {
          bars[j].style.backgroundColor = "steelblue";
        }
      }
  
      if (minIdx !== i) {
        [array[i], array[minIdx]] = [array[minIdx], array[i]];
        [bars[i].style.height, bars[minIdx].style.height] = [
          bars[minIdx].style.height,
          bars[i].style.height
        ];
      }
  
      bars[minIdx].style.backgroundColor = "steelblue";
      bars[i].style.backgroundColor = "green"; // Sorted
    }
  }
  