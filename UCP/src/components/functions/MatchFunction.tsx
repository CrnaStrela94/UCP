import { useContext } from 'react'
import data from '../../jsonData/personData.json'
import { UserContext } from '../UserContext/Usercontext';

export const MatchFunction = () => {
    const context = useContext(UserContext);

    let matches: any[] = [];
    if (context && context.user) {
        matches = data.people.filter((person: { interests: string[]; }) =>
            person.interests.some((interest: string) => context.user?.interests.includes(interest))
        );
    }

    return (
        <div>
            {matches.map((match, index) => (
                <p key={index}>{match.interests}</p>
            ))}
        </div>
    )
}