async function bubbleSort(array, bars, speed) {
    const delay = (ms) => new Promise(res => setTimeout(res, ms));
  
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        // Highlight bars being compared
        bars[j].style.backgroundColor = "yellow";
        bars[j + 1].style.backgroundColor = "yellow";
  
        if (array[j] > array[j + 1]) {
          // Swap
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          [bars[j].style.height, bars[j + 1].style.height] = [
            bars[j + 1].style.height,
            bars[j].style.height
          ];
  
          bars[j].style.backgroundColor = "red";
          bars[j + 1].style.backgroundColor = "red";
          await delay(speed);
        }
  
        bars[j].style.backgroundColor = "steelblue";
        bars[j + 1].style.backgroundColor = "steelblue";
      }
  
      bars[array.length - i - 1].style.backgroundColor = "green"; // Sorted element
    }
  }
  