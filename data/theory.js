const theoryData = {
  bubble: {
    name: "Bubble Sort",
    description:
      "Bubble Sort is a simple comparison-based algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. Larger elements bubble to the end of the list.",
    pseudocode: `
for i from 0 to n-1:
   for j from 0 to n-i-1:
      if arr[j] > arr[j+1]:
         swap(arr[j], arr[j+1])`,
    complexity: `
Best Case: O(n)  
Average Case: O(n²)  
Worst Case: O(n²)  
Space: O(1)`,
    stable: "Yes",
    useCase: "Educational purposes and very small datasets"
  },

  selection: {
    name: "Selection Sort",
    description:
      "Selection Sort repeatedly finds the minimum element from the unsorted part and puts it at the beginning. It divides the array into sorted and unsorted parts.",
    pseudocode: `
for i from 0 to n-1:
   min = i
   for j from i+1 to n:
      if arr[j] < arr[min]:
         min = j
   swap(arr[i], arr[min])`,
    complexity: `
Best Case: O(n²)  
Average Case: O(n²)  
Worst Case: O(n²)  
Space: O(1)`,
    stable: "No",
    useCase: "When memory write is costly, as it makes minimum swaps"
  },

  insertion: {
    name: "Insertion Sort",
    description:
      "Insertion Sort builds the final sorted array one item at a time. It’s much like sorting playing cards in your hands.",
    pseudocode: `
for i from 1 to n-1:
   key = arr[i]
   j = i - 1
   while j >= 0 and arr[j] > key:
      arr[j + 1] = arr[j]
      j = j - 1
   arr[j + 1] = key`,
    complexity: `
Best Case: O(n)  
Average Case: O(n²)  
Worst Case: O(n²)  
Space: O(1)`,
    stable: "Yes",
    useCase: "Efficient for small datasets or nearly sorted data"
  },

  merge: {
    name: "Merge Sort",
    description:
      "Merge Sort is a divide-and-conquer algorithm. It splits the array into halves, recursively sorts them, and merges the sorted halves.",
    pseudocode: `
if left < right:
   mid = (left + right) / 2
   mergeSort(arr, left, mid)
   mergeSort(arr, mid + 1, right)
   merge(arr, left, mid, right)`,
    complexity: `
Best Case: O(n log n)  
Average Case: O(n log n)  
Worst Case: O(n log n)  
Space: O(n)`,
    stable: "Yes",
    useCase: "Large datasets where stability matters"
  },

  quick: {
    name: "Quick Sort",
    description:
      "Quick Sort is a divide-and-conquer algorithm. It picks a pivot, partitions the array, and recursively sorts the partitions.",
    pseudocode: `
quickSort(arr, low, high):
   if low < high:
      pi = partition(arr, low, high)
      quickSort(arr, low, pi - 1)
      quickSort(arr, pi + 1, high)`,
    complexity: `
Best Case: O(n log n)  
Average Case: O(n log n)  
Worst Case: O(n²)  
Space: O(log n)`,
    stable: "No",
    useCase: "Fastest in practice for large datasets with good pivot strategy"
  }
};

function loadTheory(algo) {
  const theory = theoryData[algo];
  const contentDiv = document.getElementById("theory-content");
  contentDiv.innerHTML = `
    <h3>${theory.name}</h3>
    <p>${theory.description}</p>
    <pre><strong>Pseudocode:</strong>\n${theory.pseudocode}</pre>
    <p><strong>Time & Space Complexity:</strong><br>${theory.complexity}</p>
    <p><strong>Stable:</strong> ${theory.stable}</p>
    <p><strong>Use Case:</strong> ${theory.useCase}</p>
  `;
}
