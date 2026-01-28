const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  const value = Number(input.value);

  new Promise(resolve => {
    setTimeout(() => {
      output.textContent = `Result: ${value}`;
      resolve(value);
    }, 2000);
  })
    .then(num => {
      return new Promise(resolve => {
        setTimeout(() => {
          const res = num * 2;
          output.textContent = `Result: ${res}`;
          resolve(res);
        }, 1000);
      });
    })
    .then(num => {
      return new Promise(resolve => {
        setTimeout(() => {
          const res = num - 3;
          output.textContent = `Result: ${res}`;
          resolve(res);
        }, 1000);
      });
    })
    .then(num => {
      return new Promise(resolve => {
        setTimeout(() => {
          const res = num / 2;
          output.textContent = `Result: ${res}`;
          resolve(res);
        }, 1000);
      });
    })
    .then(num => {
      return new Promise(resolve => {
        setTimeout(() => {
          const res = num + 10;
          resolve(res);
        }, 1000);
      });
    })
    .then(finalValue => {
      output.textContent = `Final Result: ${finalValue}`;
    });
});
