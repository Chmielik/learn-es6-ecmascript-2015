var smth = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (false) {
      resolve('hello');
    } else {
      reject('no bueno');
    }
  }, 2000);
});

d.then((data) => console.log('success: ', data));
d.catch((error) => console.log('error: ', error));