import styled from '@emotion/styled';
import SimpleImageSlider from 'react-simple-image-slider';

const ImageSliderWrapper = styled.div`
  max-width: 100%;
  position: relative;
`;

type ImageList = {
  imageList: string[];
};

const ImageSlider: React.FC<ImageList> = ({ imageList }) => (
  <ImageSliderWrapper>
    <SimpleImageSlider
      width={'100%'}
      height={500}
      images={imageList}
      showBullets={true}
      showNavs={true}
    />
  </ImageSliderWrapper>
);

export default ImageSlider;
