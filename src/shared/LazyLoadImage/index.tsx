import { LazyLoadImage as LazyImage } from 'react-lazy-load-image-component';
import styled from '@emotion/styled';
import { memo } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageContent = styled.div`
  width: 100%;

  span:first-of-type {
    display: flex !important;
  }

  img:first-of-type {
    width: 100%;
    padding: 8px;
    overflow: hidden;
    object-fit: cover;
  }
`;

type LazyLoadImage = {
  source: string;
  title: string;
  alt?: string;
};

const LazyLoadImage: React.FC<LazyLoadImage> = ({ source, title, alt }) => (
  <ImageContent>
    <LazyImage alt={alt || title} src={source} effect="blur" height="150px" />
  </ImageContent>
);

export default memo(LazyLoadImage);
