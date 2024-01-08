function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ 'id': 1234 });
    }, 1000);
  });
}

function getUserInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ 'name': "sushant" });
    }, 1000);
  });
}


try{
  getUser();
  getUserInfo()
  // const [user, userInfo] =  await Promise.allSettled([getUser(), getUserInfo()])
console.log(user, userInfo)
} catch(e) {
  console.log('something went wrong')
}

console.log('hello')

setTimeout(() => {
  console.log({ 'name': "10sec" });
}, 10000);

setTimeout(() => {
  console.log({ 'name': "20sec" });
}, 2000);
