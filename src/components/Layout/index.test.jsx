import { render, screen } from '@testing-library/react';
import Layout from './';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore({ app: { loading: false } });

const mockedHoock = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedHoock,
  useLocation: () => mockedHoock,
}));

describe('Layout component tests', () => {
  render(
    <Provider store={store}>
      <Layout />
    </Provider>
  );

  it('Header button title tests', () => {
    expect(screen.getByText('TSG-Store')).toBeDefined();
    expect(screen.getByText('All Products')).toBeDefined();
    expect(screen.getByText('Shop By Category')).toBeDefined();
  });
});
