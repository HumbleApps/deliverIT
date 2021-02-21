const formatVehicle = (source: string | undefined) => {
  if (!source) {
    return '';
  }

  const pattern = [2, 5, 8];

  const strArr = [...Array.from(source)];

  for (const num of pattern) {
    strArr.splice(num, 0, ' ');
  }

  return strArr.join('');
};

export default formatVehicle;
