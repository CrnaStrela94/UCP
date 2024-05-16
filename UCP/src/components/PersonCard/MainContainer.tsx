import React, { useEffect, useState } from "react";
import persons from "../../jsonData/personData.json";
import "./mainContainer.scss";
const MainContainer = () => {
  const [person, setPerson] = useState<any>();

  useEffect(() => {
    setPerson(
      persons.people[Math.floor(Math.random() * persons.people.length - 1)]
    );
  }, []);
  useEffect(() => {
    console.log(person);
  }, [person]);
  return (
    <>
      {person && (
        <div className="cardContainer">
          <div className="imgContainer">
            <img
              src={person.image_source}
              alt="Some guy"
              className="selfieImage"
            />
          </div>
          <h2 className="name">
            {person.first_name} {person.last_name}
          </h2>
          <div className="interests">
            <ul className="interestList">
              {person.interests.map((item: string, index: number) => (
                <li className="individualInterest" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MainContainer;
