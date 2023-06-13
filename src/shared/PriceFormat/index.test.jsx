import { render, screen } from '@testing-library/react';
import PriceFormat from '.';

const mockAmount = '99.99';
const mockUSD = 'USD';
const mockEuro = 'EUR';
const mockInvalid = 'EURR';

const getWrapper = (currency) => (
  <PriceFormat price={mockAmount} currency={currency} />
);

describe('PriceFormat component tests', () => {
  it('Default currency tests', () => {
    render(getWrapper());
    expect(screen.getByText(`£${mockAmount}`)).toBeDefined();
  });

  it('GBP currency tests', () => {
    render(getWrapper(mockUSD));
    expect(screen.getByText(`$${mockAmount}`)).toBeDefined();
  });

  it('Eruo currency tests', () => {
    render(getWrapper(mockEuro));
    expect(screen.getByText(`€${mockAmount}`)).toBeDefined();
  });

  it('Invalid currency tests', () => {
    render(getWrapper(mockInvalid));
    expect(screen.getByText(`Invalid currency`)).toBeDefined();
  });
});
