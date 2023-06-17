// Learning material
function min(a, b) {
  return a > b ? b : a;
}
// console.log(min(6, 2));

let arr = [1, 2, 3, 4];
// console.log(arr.filter((n) => n % 2 == 0));
// console.log(arr.map((n) => "number".concat(n)));
// console.log(arr.map((n) => n + 1));

// Task
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const url = "https://jsonplaceholder.typicode.com/users";
fetchData(url);
