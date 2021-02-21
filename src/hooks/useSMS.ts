/**
 * Only works for android, ios doesn't allow SMS read permission
 */

const useSMS = () => {
  return {
    code: null,
  };
};

export default useSMS;
