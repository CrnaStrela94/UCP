import React, { useEffect, useState } from 'react';
import MatchFunction from '../../components/functions/MatchFunction';

const MatchPage = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const [matches, setMatches] = useState<{ first_name: string; last_name: string; interests: string[]; native_language: string; image_source: string; }[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMatches = async () => {
            const result = await MatchFunction();
            console.log('matches', result);
            setMatches(result);
            setLoading(false);
        };

        fetchMatches();
    }, [user]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="match-page">
            <h1>Matches</h1>
            {matches && matches.length > 0 ? (
                matches.map((match, index) => (
                    <div key={index} className="match-card">
                        <h2>{match.first_name} {match.last_name}</h2>
                        <p>Interests: {match.interests.join(', ')}</p>
                    </div>
                ))
            ) : (
                <p>No matches found.</p>
            )}
        </div>
    );
};

export default MatchPage;