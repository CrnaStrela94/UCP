import React from 'react';
import { MatchFunction } from '../../components/functions/MatchFunction';
import MainContainer from '../../components/PersonCard/MainContainer';

const MatchPage: React.FC = () => {
    const matches = MatchFunction();

    return (
        <div>
            {matches.map((match, index) => (
                <MainContainer key={index} person={match} />
            ))}
        </div>
    );
};

export default MatchPage;