import { useSelector } from 'react-redux';

import { selectAllHubs } from 'selectors/hubsSelectors';

const useHubs = () => {
  const allHubs = useSelector(selectAllHubs);

  const getHubsAddress = (id: string) => {
    const hub = allHubs[id] || {};

    return hub.info?.formatted_address;
  };

  return {
    getHubsAddress,
  };
};

export default useHubs;
