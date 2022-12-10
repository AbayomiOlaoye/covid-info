import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ShowInfo from '../components/ShowInfo';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {
      continent: 'Africa',
      cases: '16',
      todayCases: '123',
      deaths: '25',
      todayDeaths: '44',
      recovered: '23',
      todayRecovered: '34',
      test: '123',
    },
  }),
}));

test('Check if details page renders correctly', () => {
  const tree = render(
    <Router>
      <ShowInfo />
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
