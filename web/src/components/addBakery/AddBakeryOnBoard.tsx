/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Button } from '../common';

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
  const [activeSlide, setActiveSlide] = React.useState<number>(0);
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      breakpoints: {
        '(min-width: 768px)': {
          slides: { origin: 'center', perView: 5, spacing: 40 },
        },
        '(max-width: 767px)': {
          slides: { origin: 'center', perView: 3, spacing: 40 },
        },
        '(max-width: 420px)': {
          slides: { origin: 'center', perView: 2, spacing: 40 },
        },
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        const clearNextTimeout = () => clearTimeout(timeout);
        const nextTimeout = () => {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1500);
        };

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on('slideChanged', (slider) =>
          setActiveSlide(slider.track.details.rel)
        );
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

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
                activeSlide === idx ? 'active' : ''
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
  overflow: visible !important;
  margin: auto;
  width: 100%;
`;

const Slide = styled.div`
  margin-top: auto;
  opacity: 0.6;
  font-size: 0.8rem;
  text-align: center;
  overflow: visible !important;

  img {
    width: 100%;
  }

  &.active {
    opacity: 1;
    font-size: 1rem;

    > div {
      transform: scale(1.4) translateY(-5px);
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
  margin: 0 0 16px;
  width: 100%;
`;
