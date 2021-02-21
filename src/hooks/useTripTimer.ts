import { useEffect } from 'react';
import useCountDown from 'react-countdown-hook';
import { ONE_MINUTE_IN_MS, ONE_SECOND_IN_MS } from 'constants/miscData';

const useTimer = () => {
  const [timeLeft, { start }] = useCountDown(
    15 * ONE_MINUTE_IN_MS,
    ONE_SECOND_IN_MS,
  );

  useEffect(() => {
    start();
  }, [start]);

  var mmss = new Date(timeLeft).toISOString().substr(14, 5);
  var minutes = mmss.substr(0, 2);
  var seconds = mmss.substr(3);
  return {
    minutes: parseInt(minutes),
    seconds: parseInt(seconds),
  };
};

export default useTimer;
