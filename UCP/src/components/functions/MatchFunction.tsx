import { useContext } from 'react';
import data from '../../jsonData/personData.json';
import { UserContext } from '../UserContext/Usercontext';

export const MatchFunction = () => {
    const context = useContext(UserContext);

    let matches: any[] = [];
    if (context && context.user) {
        const userInterests = context.user.interests;
        matches = data.people
            .map((person: { interests: string[] }) => {
                const sharedInterests = person.interests.filter((interest: string) => userInterests.includes(interest));
                return { person, sharedInterestsCount: sharedInterests.length };
            })
            .filter(({ sharedInterestsCount }) => sharedInterestsCount > 0)
            .sort((a, b) => b.sharedInterestsCount - a.sharedInterestsCount)
            .map(({ person }) => person);
    }

    return matches;
};
