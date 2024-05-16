import { useEffect, useState } from "react";
import "./mainContainer.scss";

type MainContainerProps = {
  person: any; // replace 'any' with the type of your person object
};
const MainContainer: React.FC<MainContainerProps> = ({ person }) => {

  const [selectedPerson, setPerson] = useState<any>();

  useEffect(() => {
    setPerson(person);
  }, []);
  useEffect(() => {
    console.log(selectedPerson);
  }, [selectedPerson]);
  return (
    <>
      {person && (
        <div className="cardContainer">
          <div className="imgContainer">
            <img
              src={selectedPerson.image_source}
              alt="Some guy"
              className="selfieImage"
            />
          </div>
          <h2 className="name">
            {selectedPerson.first_name} {selectedPerson.last_name}
          </h2>
          <div className="interests">
            <ul className="interestList">
              {selectedPerson.interests.map((item: string, index: number) => (
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
