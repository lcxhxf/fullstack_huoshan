// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//       setTimeout(resolve, ms, 'done');
//     });
//   }
  
//   timeout(100).then((value) => {
//     console.log(value);
//   });

// let promise = new Promise(function(resolve, reject) {
//     console.log('Promise');
//     resolve();
//   });
  
//   promise.then(function() {
//     console.log('resolved.');
//   });
  
//   console.log('Hi!');

// function loadImageAsync(url) {
//     return new Promise(function(resolve, reject) {
//       const image = new Image();
  
//       image.onload = function() {
//         resolve(image);
//       };
  
//       image.onerror = function() {
//         reject(new Error('Could not load image at ' + url));
//       };
  
//       image.src = url;
//     });
//   }

const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 3000)
  })
  
  const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000)
  })
  
  p2
    .then(result => console.log(result))
    .catch(error => console.log(error))
