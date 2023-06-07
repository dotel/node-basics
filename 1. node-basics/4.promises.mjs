function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({'id': 1234});
    }, 10000);
  });
}

function getUserInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({'name': "sushant"});
    }, 1000);
  });
}


try{
  const [user, userInfo] =  await Promise.allSettled([getUser(), getUserInfo()])
console.log(user, userInfo)
} catch(e) {
  console.log('something went wrong')
}

console.log('hello')
