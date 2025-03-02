/* JS FILE: script.js */
let bars = [];
function generateBars() {
    const container = document.getElementById("bars");
    container.innerHTML = "";
    bars = [];
    for (let i = 0; i < 20; i++) {
        let value = Math.floor(Math.random() * 100) + 10;
        let bar = document.createElement("div");
        bar.style.height = value + "px";
        bar.classList.add("bar");
        bars.push({ element: bar, value });
        container.appendChild(bar);
    }
}
async function bubbleSort() {
    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            if (bars[j].value > bars[j + 1].value) {
                await swap(j, j + 1);
            }
        }
    }
}
async function selectionSort() {
    for (let i = 0; i < bars.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < bars.length; j++) {
            if (bars[j].value < bars[minIdx].value) {
                minIdx = j;
            }
        }
        await swap(i, minIdx);
    }
}
async function insertionSort() {
    for (let i = 1; i < bars.length; i++) {
        let key = bars[i];
        let j = i - 1;
        while (j >= 0 && bars[j].value > key.value) {
            bars[j + 1] = bars[j];
            j--;
        }
        bars[j + 1] = key;
        updateBars();
        await sleep(100);
    }
}
function updateBars() {
    const container = document.getElementById("bars");
    container.innerHTML = "";
    bars.forEach(bar => container.appendChild(bar.element));
}
async function swap(i, j) {
    await sleep(100);
    let temp = bars[i];
    bars[i] = bars[j];
    bars[j] = temp;
    updateBars();
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function clicked(){
    var element = document.getElementById("theory_contant");
    element.scrollIntoView();
}
function show_theory() {
    document.getElementById('bubbleSort_theory').style.display = "block";
}

generateBars();