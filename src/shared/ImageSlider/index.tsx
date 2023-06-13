import styled from '@emotion/styled';
import SimpleImageSlider from 'react-simple-image-slider';

const ImageSliderWrapper = styled.div`
  max-width: 100%;
  position: relative;
`;

const ImageSlider = ({ imageList }) => {
  return (
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
};

export default ImageSlider;
