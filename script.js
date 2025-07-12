const sizeRange = document.getElementById("sizeRange");
const sizeValue = document.getElementById("sizeValue");

sizeRange.addEventListener("input", () => {
  sizeValue.textContent = sizeRange.value;
  generateArray(); // regenerate on size change
});


function generateArray() {
  array = [];
  const visualizerElement = document.getElementById("visualizer");
  const visualizerWidth = visualizerElement.offsetWidth;

  visualizerElement.innerHTML = "";

  const barCount = parseInt(document.getElementById("sizeRange").value);
  const barWidth = Math.max(2, Math.floor(visualizerWidth / barCount));

  for (let i = 0; i < barCount; i++) {
    const visualizerHeight = visualizerElement.offsetHeight;
    const maxBarHeight = visualizerHeight - 20; // leave padding space
    const value = Math.floor(Math.random() * maxBarHeight) + 10;

    array.push(value);

    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value}px`;
    bar.style.width = `${barWidth}px`;

    visualizerElement.appendChild(bar);
  }

  console.log("Bar count:", barCount, "| Bar width:", barWidth);
}



function getSpeed() {
  const range = document.getElementById("speedRange").value;
  return 200 - range * 1.8; // Speed scaling
}



function startSort() {
  const algo = document.getElementById("algorithm-select").value;
  const bars = document.querySelectorAll(".bar");
  const speed = getSpeed();

  if (algo === "bubble") {
    bubbleSort([...array], bars, speed);
  } else if (algo === "selection") {
    selectionSort([...array], bars, speed);
  } else if (algo === "insertion") {
    insertionSort([...array], bars, speed);
  } else if (algo === "merge") {
    mergeSort([...array], bars, speed);
  } else if (algo === "quick") {
    quickSort([...array], bars, speed);
  }  
}

// Load default theory
document.getElementById("algorithm-select").addEventListener("change", (e) => {
  loadTheory(e.target.value);
});

// Initial load
window.onload = () => {
  generateArray();
  loadTheory("bubble");
};
