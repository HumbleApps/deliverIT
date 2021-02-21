export const objectToLabelValueMap = (source: Record<string, any>) => {
  type Item = {
    label: string;
    value: string;
  };
  let result: Item[] = [];

  Object.keys(source).map((key) => {
    result.push({
      label: source[key],
      value: key,
    });
  });

  return result;
};
