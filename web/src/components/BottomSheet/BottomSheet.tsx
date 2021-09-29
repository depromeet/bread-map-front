import * as React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

const BottomSheet: React.FC = () => {
  const onClick = (e) => {
    console.log(e)
  }

  return (
    <>
      <Base onClick={onClick}>
        <Header>
          <Grip/>
        </Header>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quae repudiandae voluptatibus hic dicta, a accusamus quas, quaerat earum, nihil exercitationem consequatur odio. Reprehenderit libero voluptatum corrupti expedita incidunt cumque.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quae repudiandae voluptatibus hic dicta, a accusamus quas, quaerat earum, nihil exercitationem consequatur odio. Reprehenderit libero voluptatum corrupti expedita incidunt cumque.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quae repudiandae voluptatibus hic dicta, a accusamus quas, quaerat earum, nihil exercitationem consequatur odio. Reprehenderit libero voluptatum corrupti expedita incidunt cumque.</p>
      </Base>
    </>
  );
};

export default BottomSheet;


// .nav-menu {
//   @apply flex w-72 h-full 
//   justify-center fixed top-0 
//   -right-full transition duration-300 ease-in-out;
//   transition-property: right;
// }

// .nav-menu.active {
//   @apply fixed right-0 transition duration-300 ease-in-out;
//   transition-property: right;
// }

const Base = styled.footer`
  width: 100%;
  background-color: #ccc;

  position: fixed;
  left: 0;
  bottom: 4rem;  // == Footer height
`;

const Grip = styled.div`
  height: 0.5rem;
  width: 4rem;
  border-radius: 1rem;
  background-color: black;
`;

const Header = styled.footer`
  width: 100%;
  height: 2rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #bbb;

  position: relative;
  bottom: 2rem;
`;