import personData from '../../jsonData/personData.json';

const MatchFunction = async () => {
    const user = JSON.parse(localStorage.getItem('user') || 'null');

    if (!user) {
        return null;
    }

    console.log("user", user)

    const matches = personData.people.filter((person) => {
        if (person.interests.some((interest: any) => user.interests.includes(interest))) {
            console.log("person matched:", person)
            return person
        }
    });

    return matches;
};

export default MatchFunction;