module.exports = function make(...args) {
  const arr = [];

  function innerArguments(...funcArgs) {
    if (typeof funcArgs[0] === 'function') {
      return arr.reduce((acc, current) => acc + current, 0);
    }

    for (let i = 0; i < funcArgs.length; i += 1) {
      arr.push(funcArgs[i]);
    }
    return innerArguments;
  }

  return innerArguments(...args);
};
