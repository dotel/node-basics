// Code snippet using .then syntax
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Data:', data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// Same code using async await syntax
async function fetchData() {
  try {
    // throw new Error()
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}




fetchData();
console.log('should be printed at last')
