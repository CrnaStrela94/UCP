import React from 'react';

type RoundButtonProps = {
  svg: string;
  onClick: () => void;
};

const RoundButton: React.FC<RoundButtonProps> = ({ svg, onClick }) => {
  return (
    <button onClick={onClick}>
      <img src={`/${svg}.svg`} alt="description" />
    </button>
  );
};

export default RoundButton;
