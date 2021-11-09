/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import styled from '@emotion/styled';
import { Button } from '../common';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { TDetails } from 'keen-slider';

const previewStore = [
  {
    img: '/images/thumbnail.png',
    name: '루엘드파리',
    pioneer: '소빵',
  },
  {
    img: '/images/thumbnail.png',
    name: '루엘드파리2',
    pioneer: '대빵',
  },
  {
    img: '/images/thumbnail.png',
    name: '루엘드파리3',
    pioneer: '소빵',
  },
  {
    img: '/images/thumbnail.png',
    name: '루엘드파리4',
    pioneer: '대빵',
  },

  {
    img: '/images/thumbnail.png',
    name: '루엘드파리5',
    pioneer: '소빵',
  },

  {
    img: '/images/thumbnail.png',
    name: '루엘드파리6',
    pioneer: '대빵',
  },
];

const OnBoardStore: React.FC = () => {
  const [details, setDetails] = React.useState<TDetails>();
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    centered: true,
    slidesPerView: 2,
    spacing: 40,
    slideChanged(s) {
      setDetails(s.details());
    },
  });

  return (
    <>
      <Title>
        우와,
        <br />
        빵집 개척자님!
        <br />
        반가워요 👋
      </Title>
      <SliderWrapper>
        <Slider className="keen-slider" ref={sliderRef}>
          {previewStore.map((store, idx) => (
            <Slide
              className={`keen-slider__slide ${
                details?.relativeSlide === idx ? 'active' : ''
              }`}
              key={idx}
            >
              <div>
                <img src={store.img} alt="storeOnBoarding" />
                <StoreName>{store.name}</StoreName>
                <StorePioneer>
                  <b>{store.pioneer}</b>님 개척
                </StorePioneer>
              </div>
            </Slide>
          ))}
        </Slider>
      </SliderWrapper>
      <Button>개척하기</Button>
    </>
  );
};

export default OnBoardStore;

const Title = styled.h1`
  margin: 2rem 0 0;
`;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  //TO-DO width가 넓어지면 무지하게 커져서 고정값으로 임시 고정. 따로 공통적인 media 설정필요
  max-width: 500px;
  height: 100%;
  flex-grow: 1;
  margin: auto;
  overflow-x: hidden;
`;

const Slider = styled.div`
  margin: auto;
  width: 100%;
  overflow: visible;
`;

const Slide = styled.div`
  margin-top: auto;
  opacity: 0.6;
  font-size: 0.8rem;
  text-align: center;

  img {
    width: 100%;
  }

  &.active {
    opacity: 1;
    font-size: 1rem;
    overflow: visible;

    > div {
      transform: scale(1.4);
      transition: transform 0.2s ease-in-out;
    }
  }
`;

const StoreName = styled.div`
  font-weight: bold;
  font-size: 1em;
  font-size: clamp(10px, 4vw, 1rem);
  margin-bottom: 1em;
`;

const StorePioneer = styled.span`
  padding: 2px 4px;
  border-radius: 2px;
  font-size: clamp(10px, 2vw, 1rem);
  background: ${({ theme }) => theme.color.primary100};

  > b {
    color: #ff6e40;
  }
`;
