import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from '@emotion/styled';

const Postcode: React.FC = (props) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = ''; 
    
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  }

  return (
    <DaumPostcode
      onComplete={handleComplete}
      { ...props }
    />
  );
};

export default Postcode;

const Base = styled.footer`
  width: 100%;
  height: 3rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
`;