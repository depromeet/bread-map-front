import useSlider from '@/utils/useSlider';
import React from 'react';
import GrayStar from '@/components/icons/GrayStar';
import OrangeStar from '@/components/icons/OrangeStar';

const Star = () => {
  const ref = React.useRef(null);
  const { isSliding, value, pos, length } = useSlider(ref);
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    clickStar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const clickStar = () => {
    const percent = Math.round(value * 100);
    if (percent === 0) return;
    else if (percent >= 0 && percent < 16) setScore(1);
    else if (percent >= 16 && percent < 36) setScore(2);
    else if (percent >= 36 && percent < 56) setScore(3);
    else if (percent >= 56 && percent < 75) setScore(4);
    else setScore(5);
  };

  const renderStar = () => {
    const arr = [...Array(score).fill(1), ...Array(5 - score).fill(0)];
    return arr.map((item) => (item === 1 ? <OrangeStar /> : <GrayStar />));
  };

  return (
    <div style={{ height: '100vh', width: '160px' }}>
      <div ref={ref} style={{ position: 'relative' }}>
        <p style={{ textAlign: 'center', color: isSliding ? 'red' : 'green' }}>
          {Math.round(value * 100)}%
        </p>
        <div style={{ position: 'absolute', left: pos }}>{renderStar()}</div>
      </div>
    </div>
  );
};

export default Star;
