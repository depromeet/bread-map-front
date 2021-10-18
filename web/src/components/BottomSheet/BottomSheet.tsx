import * as React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

const BottomSheet: React.FC = () => {
  const onClick = (e) => {
    console.log(e);
  };

  return (
    <>
      <Base onClick={onClick}>
        <Header>
          <Grip />
        </Header>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quae
          repudiandae voluptatibus hic dicta, a accusamus quas, quaerat earum,
          nihil exercitationem consequatur odio. Reprehenderit libero voluptatum
          corrupti expedita incidunt cumque.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quae
          repudiandae voluptatibus hic dicta, a accusamus quas, quaerat earum,
          nihil exercitationem consequatur odio. Reprehenderit libero voluptatum
          corrupti expedita incidunt cumque.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quae
          repudiandae voluptatibus hic dicta, a accusamus quas, quaerat earum,
          nihil exercitationem consequatur odio. Reprehenderit libero voluptatum
          corrupti expedita incidunt cumque.
        </p>
      </Base>
    </>
  );
};

export default BottomSheet;

const Base = styled.footer`
  width: 100%;
  background-color: #aaffaa;
  position: fixed;
  left: 0;
  bottom: 3rem; // == Footer height
`;

const Grip = styled.div`
  height: 0.25rem;
  width: 2rem;
  border-radius: 1rem;
  background-color: #979797;
`;

const Header = styled.footer`
  width: 100%;
  height: 2rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aaffaa;
  position: relative;
  bottom: 2rem;
`;
