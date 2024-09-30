const handleStringLengthFrequency = (arrString) => {
  const mapString = new Map();
  arrString.forEach((string) => {
    if (!mapString.has(string.length)) {
      mapString.set(string.length, new Array(string));
    } else {
      mapString.get(string.length).push(string);
    }
  });
  const MaxLenght = {
    length: 0,
    value: [],
  };
  mapString.forEach((value, key) => {
    if (value.length > MaxLenght.length) {
      MaxLenght.length = value.length;
      MaxLenght.value = value;
    }
  });
  return MaxLenght.value;
};

console.log(handleStringLengthFrequency(["a", "ab", "abc", "cd", "def", "gh"]));
