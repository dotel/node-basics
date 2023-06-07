// Callbacks are simply functions being passed around to be invoked later. Think like giving your number to get a 
// call back later. Similarly, you're passing a function to another function so that it can call it later.
function getData(callback) {
  setTimeout(() => {
    const data = 'Data from the first API call';
    console.log('get data')
    callback(data);
  }, 1000);
}


function processData(data, callback) {
  setTimeout(() => {
    const processedData = data.toUpperCase();
    console.log('processing data')
    callback(processedData);
  }, 1000);
}

function saveData(data, callback) {
  setTimeout(() => {
    const savedData = `Saved: ${data}`;
    callback(savedData);
  }, 1000);
}

function handleError(error) {
  console.error('Error:', error);
}

// Example of callback hell. Callbacks can get nasty really fast. We'll learn how to avoid it later.
getData(function (data1) {
  processData(data1, function (processedData) {
    saveData(processedData, function (savedData) {
      console.log(savedData);
    });
  });
});
