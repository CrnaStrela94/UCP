import React, { ReactNode } from 'react';
import './btn.scss';

type RoundButtonProps = {
    svg: ReactNode;
    onClick: () => void;
};

const RoundButton: React.FC<RoundButtonProps> = ({ svg, onClick }) => {
    return (
        <button className="roundBtn" onClick={onClick}>
            {svg}
        </button>
    );
};

export default RoundButton;