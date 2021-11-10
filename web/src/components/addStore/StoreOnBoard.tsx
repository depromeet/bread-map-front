/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import styled from '@emotion/styled';
import { Button } from '../common';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { TDetails } from 'keen-slider';
import { useRouter } from 'next/router';

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

const StoreOnBoard = () => {
  const router = useRouter();
  const [details, setDetails] = React.useState<TDetails>();
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    centered: true,
    slidesPerView: 2,
    spacing: 40,
    breakpoints: {
      '(min-width: 768px)': {
        slidesPerView: 5,
      },
      '(max-width: 767px)': {
        slidesPerView: 3,
      },
      '(max-width: 420px)': {
        slidesPerView: 2,
      },
    },
    slideChanged(s) {
      setDetails(s.details());
    },
  });

  const buttonClickHandler = React.useCallback(() => {
    router.push({
      query: { tab: '2' },
    });
  }, [router]);

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
      <ButtonStyle
        styleType={'primary'}
        size={'large'}
        onClick={buttonClickHandler}
      >
        개척하기
      </ButtonStyle>
    </>
  );
};

export default StoreOnBoard;

const Title = styled.h1`
  margin: 1rem 0 0;
`;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  max-width: 1000px;
  height: 100%;
  flex-grow: 1;
  margin: auto;
  overflow-x: visible;

  @media (min-width: 1000px) {
    overflow: hidden;
  }
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
  font-size: clamp(11px, 4vw, 0.9rem);
  margin-bottom: 1em;
`;

const StorePioneer = styled.span`
  padding: 2px 4px;
  border-radius: 2px;
  font-size: clamp(10px, 2vw, 0.6rem);
  background: ${({ theme }) => theme.color.primary100};

  > b {
    color: #ff6e40;
  }
`;

const ButtonStyle = styled(Button)`
  position: sticky;
  bottom: 16px;
  width: 100%;
`;
