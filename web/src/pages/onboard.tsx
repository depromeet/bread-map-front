/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styled from '@emotion/styled';
import { Button } from '@/components/common';
import router from 'next/router';

const Onboard = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  const startClickHandler = () => {
    router.push('/map');
  };

  return (
    <Container>
      <div className="keen-slider" ref={sliderRef}>
        <Slide className="keen-slider__slide">
          <SlideText className="title">
            안녕?
            <br />
            나는 소빵이야!
          </SlideText>
          <SlideImg>
            <img src="/images/onboarding_01.png" alt="onboarding" />
          </SlideImg>
        </Slide>
        <Slide className="keen-slider__slide">
          <SlideText>
            혹시 주종목인 빵이 있어?
            <br />
            좋아하는 빵만 모아서 보여줄게!
          </SlideText>
          <SlideImg>
            <img src="/images/onboarding_02.png" alt="onboarding" />
          </SlideImg>
        </Slide>
        <Slide className="keen-slider__slide">
          <SlideText>
            가고 싶은 곳과 가본 곳에
            <br />
            빵깃발을 꽂을 수 있어!
          </SlideText>
          <SlideImg>
            <img src="/images/onboarding_03.png" alt="onboarding" />
          </SlideImg>
        </Slide>
        <Slide className="keen-slider__slide">
          <SlideText>
            빵 리뷰를 써서 빵순이들의
            <br />
            윤택한 빵라이프를 살도록 돕자!
          </SlideText>
          <SlideImg>
            <img src="/images/onboarding_04.png" alt="onboarding" />
          </SlideImg>
        </Slide>
        <Slide className="keen-slider__slide">
          <SlideText>
            그럼 나는
            <br />빵 쟁이러 이만!
          </SlideText>
          <SlideImg>
            <img src="/images/onboarding_05.png" alt="onboarding" />
          </SlideImg>
          <StartButton type="none" size="large" onClick={startClickHandler}>
            시작하기
          </StartButton>
        </Slide>
      </div>
      {slider && (
        <Dots>
          {Array(slider.details().size)
            .fill(0)
            .map((_, idx) => (
              <li
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              />
            ))}
        </Dots>
      )}
    </Container>
  );
};

export default Onboard;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.primary500};

  .keen-slider {
    height: 100%;
    cursor: pointer;
  }
`;

const Slide = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const SlideText = styled.div`
  align-self: flex-end;
  margin-bottom: 30px;
  line-height: 1.4;
  font-family: 'NanumSquareRound', sans-serif;
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;

  &.title {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

const SlideImg = styled.div`
  max-width: 360px;
  width: 95%;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;

const StartButton = styled(Button)`
  justify-self: center;
  align-self: flex-end;
  border: none;
  margin-bottom: 20px;
  width: 95%;
  color: ${({ theme }) => theme.color.primary500};
`;

const Dots = styled.ul`
  display: flex;
  list-style: none;
  position: fixed;
  padding: 0;
  margin: 0;
  bottom: 13%;
  left: 50%;
  transform: translateX(-50%);
  gap: 4px;
  justify-content: center;

  .dot {
    border: none;
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.color.white};
    opacity: 0.65;
    border-radius: 50%;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    opacity: 1;
  }
`;
