import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Home from '../components/Home';

describe('Testing snapshots', () => {
  test('A snapshot of the home component', () => {
    const rendererComponent = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>,
      )
      .toJSON();
    expect(rendererComponent).toMatchSnapshot();
  });
});
