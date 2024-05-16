import React, { useState, useContext, ChangeEvent, FormEvent } from "react";
import { UserContext } from "../../components/UserContext/Usercontext";
import "./RegisterPage.scss";
import { useNavigate } from "react-router-dom";

type FormData = {
  firstname: string;
  lastname: string;
  interests: string[];
  language: string;
};

const RegisterPage: React.FC = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  if (!userContext) {
    throw new Error("RegisterPage must be used within a UserProvider");
  }

  const { setUser } = userContext;

  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    interests: [],
    language: "",
  });

  const [currentInterest, setCurrentInterest] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInterestChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentInterest(e.target.value);
  };

  const addInterest = () => {
    if (currentInterest.trim() !== "") {
      setFormData({
        ...formData,
        interests: [...formData.interests, currentInterest.trim()],
      });
      setCurrentInterest("");
    }
  };

  const removeInterest = (index: number) => {
    const interests = formData.interests.filter((_, i) => i !== index);
    setFormData({ ...formData, interests });

  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setUser(formData);
    navigate('/connect');
  };
  const handleRegistry = () => { navigate('/connect') }
  return (
    <div className="register-page">
      <h1>Register</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
        <label htmlFor="language">Native Language</label>
        <input
          type="text"
          id="language"
          name="language"
          value={formData.language}
          onChange={handleChange}
        />

        <label htmlFor="interest">Interests</label>
        <input
          type="text"
          id="interest"
          name="interest"
          value={currentInterest}
          onChange={handleInterestChange}
        />
        <button type="button" onClick={addInterest}>
          Add Interest
        </button>

        <div className="interests">
          {formData.interests.map((interest, index) => (
            <div key={index} className="interest-bubble">
              {interest}
              <button type="button" onClick={() => removeInterest(index)}>
                &times;
              </button>
            </div>
          ))}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
