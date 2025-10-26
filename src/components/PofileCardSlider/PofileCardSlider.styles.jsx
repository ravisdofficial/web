import styled from 'styled-components';
import Slider from 'react-slick';


export const SliderWrapper = styled.div`
  width: 100%;
  background:  #104D39;;
  padding: 60px 0 80px;
  overflow: hidden;
  position: relative;
  display: flex
;
    align-items: center;
    justify-content: center;
    .slick-slide > div {
    display: flex;
    justify-content: center;
  }

    .slick-slider {
        max-width:80vw;
        .slick-dots {
            bottom:0 !important;
            transform: translate(50%);
                width: 50% !important;
        }
            .slick-prev {
                top: unset !important;
                bottom: -14px;
                left: unset;
                
            }
             .slick-next {
                top: unset !important;
                bottom: -14px;
                left: unset;
                right: 0 !important;
            }
    }
`;