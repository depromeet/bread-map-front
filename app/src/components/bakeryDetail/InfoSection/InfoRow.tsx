import React from 'react';
import styled from '@emotion/native';

type InfoRowProps = {
  icon: SVGElement;
  text: string;
};

const InfoRow: React.FC<InfoRowProps> = ({ icon, text }) => (
  <Row>
    {icon}
    <InfoText>{text}</InfoText>
  </Row>
);

export default InfoRow;

const Row = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

const InfoText = styled.Text`
  margin-left: 8px;
  color: ${({ theme }) => theme.color.gray600};
  font-size: 12px;
`;
