export function getRandomInteger(maximum, minimum = 0) {
  const randomed = Math.random() * maximum;
  return Math.floor(minimum + randomed);
}


export function promisedRandomInteger(maximum, minimum) {
  return new Promise((resolve) => {
    // Just for the sake of something, wait for 1.5 seconds
    setTimeout(() => {
      resolve(getRandomInteger(maximum, minimum));
    }, 1500);
  });
}
