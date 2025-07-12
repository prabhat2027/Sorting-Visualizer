async function quickSort(array, bars, speed) {
    const delay = (ms) => new Promise(res => setTimeout(res, ms));
  
    async function partition(low, high) {
      let pivot = array[high];
      bars[high].style.backgroundColor = "red";
  
      let i = low - 1;
      for (let j = low; j < high; j++) {
        bars[j].style.backgroundColor = "yellow";
        await delay(speed);
  
        if (array[j] < pivot) {
          i++;
          [array[i], array[j]] = [array[j], array[i]];
          [bars[i].style.height, bars[j].style.height] = [
            bars[j].style.height,
            bars[i].style.height
          ];
        }
  
        bars[j].style.backgroundColor = "steelblue";
      }
  
      [array[i + 1], array[high]] = [array[high], array[i + 1]];
      [bars[i + 1].style.height, bars[high].style.height] = [
        bars[high].style.height,
        bars[i + 1].style.height
      ];
  
      bars[high].style.backgroundColor = "steelblue";
      bars[i + 1].style.backgroundColor = "green";
      return i + 1;
    }
  
    async function sort(low, high) {
      if (low < high) {
        let pi = await partition(low, high);
        await sort(low, pi - 1);
        await sort(pi + 1, high);
      } else if (low === high) {
        bars[low].style.backgroundColor = "green";
      }
    }
  
    await sort(0, array.length - 1);
  }
  