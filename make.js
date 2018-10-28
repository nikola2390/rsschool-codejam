function make(...args) {
  const arr = [];

  function innerArguments(...funcArgs) {
    if (typeof funcArgs[0] !== 'function') {
      for (let i = 0; i < funcArgs.length; i += 1) {
        arr.push(funcArgs[i]);
      }
      return innerArguments;
    }
    if (typeof funcArgs[0] === 'function') {
      return arr.reduce((acc, current) => acc + current, 0);
    }
  }

  return innerArguments(...args);
}
