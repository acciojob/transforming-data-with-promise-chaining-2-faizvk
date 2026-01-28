//your JS code here. If required.
const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  const value = Number(input.value);

  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
      output.textContent = `Result: ${value}`;
    }, 2000);
  })
    .then(num => {
      return new Promise(resolve => {
        setTimeout(() => {
          output.textContent = `Result: ${num}`;
          resolve(num * 2);
        }, 1000);
      });
    })
    .then(num => {
      return new Promise(resolve => {
        setTimeout(() => {
          output.textContent = `Result: ${num}`;
          resolve(num - 3);
        }, 1000);
      });
    })
    .then(num => {
      return new Promise(resolve => {
        setTimeout(() => {
          output.textContent = `Result: ${num}`;
          resolve(num / 2);
        }, 1000);
      });
    })
    .then(num => {
      return new Promise(resolve => {
        setTimeout(() => {
          output.textContent = `Result: ${num}`;
          resolve(num + 10);
        }, 1000);
      });
    })
    .then(finalValue => {
      output.textContent = `Final Result: ${finalValue}`;
    })
    .catch(err => {
      console.error(err);
    });
});
