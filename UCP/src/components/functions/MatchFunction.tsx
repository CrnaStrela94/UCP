import React, { useContext } from 'react'
import data from '../../jsonData/personData.json'
import { PersonContext } from '../path/to/PersonContext'

export const MatchFunction = () => {
    const { interests } = useContext(PersonContext);

    const matches = data.people.filter((person: { interests: string[]; }) =>
        person.interests.some((interest: string) => interests.includes(interest))
    );

    return (
        <div>
            {matches.map((match, index) => (
                <p key={index}>{match.interests}</p>
            ))}
        </div>
    )
}