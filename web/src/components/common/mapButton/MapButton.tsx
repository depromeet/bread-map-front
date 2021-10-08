import React, { MouseEvent } from 'react';
import { Button } from './styles';

interface MapButtonProps {
  clickHandler: (e: MouseEvent) => void;
  className?: string;
}

const MapButton: React.FC<MapButtonProps> = ({ children, ...props }) => {
  const { clickHandler, className } = props;

  return (
    <Button onClick={clickHandler} className={className}>
      {children}
    </Button>
  );
};

export default MapButton;
