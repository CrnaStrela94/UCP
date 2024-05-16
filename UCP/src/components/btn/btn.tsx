import React from 'react'
import './btn.scss';

type RoundButtonProps = {
    svg: string;
    onClick: () => void;
};

const RoundButton: React.FC<RoundButtonProps> = ({ svg, onClick }) => {
    return (
        <button className="roundBtn" onClick={onClick}>
            <img src={`/${svg}.svg`} alt="description" />
        </button>
    );
};

export default RoundButton;