import isEmpty from 'utils/isEmpty';

const categorize = (wsData: any) => {
  if (!isEmpty(wsData)) {
    const { data } = wsData;

    if (data.type === 'quote') {
      console.log('Quote Socket!', data);
    } else if (data.type === 'listing') {
      console.log('Listing Socket!');
    } else if (data.type === 'client_listing') {
      console.log('Client Listing Socket!');
    }
  }
};

export { categorize };
