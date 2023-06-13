import { memo } from 'react';
import localePrice from '../../utils/LocalePrice';

type PriceFomatterInputs = {
  price: number;
  currency?: string;
};

const PriceFormat: React.FC<PriceFomatterInputs> = ({ price, currency }) => (
  <span>{localePrice(price, currency)}</span>
);

export default memo(PriceFormat);
