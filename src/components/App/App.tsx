import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Text } from 'react-native';
import WithBootstrap from 'components/WithBootstrap';
import Routes from 'routes';
import store from 'store';
import Loader from 'components/Loader';

const App = () => {
  return (
    <Fragment>
      {/* <Provider store={store}> */}
        {/* <Routes> */}
          {/* <WithBootstrap /> */}
          {/* <Loader /> */}
          {/* <Modal /> */}
        {/* </Routes> */}
      {/* </Provider> */}
      <Text>App</Text>
    </Fragment>
  );
};

export default App;
