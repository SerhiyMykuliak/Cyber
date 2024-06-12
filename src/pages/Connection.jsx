import "./Connection.scss";
import React, { useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


export default function Connection() {

  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    city: '',
    street: '',
    building: '',
    apartment: '',
    phoneNumber: ''
  });

  const questions = [
    { label: 'Введіть назву міста', name: 'city' },
    { label: 'Введіть назву вулиці', name: 'street' },
    { label: 'Введіть номер будинка', name: 'building' },
    { label: 'Введіть номер квартири', name: 'apartment' },
    { label: 'Введіть номер телефону', name: 'phoneNumber' }
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    for (const question of questions) {
      if (!formData[question.name]) {
        return false;
      }
    }
    return true; 
  };
  
  const handleNextStep = async () => {
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      if (validateForm()) {
        try {
          await addDoc(collection(db, 'connections'), formData);
          alert('Ваша заява прийнята та відправлена на опрацювання');
          navigate('/');
        } catch (error) {
          alert('Виникла помилка при відправці заявки.');
        }
      } else {
        alert('Будь ласка, заповніть всі поля перед надсиланням.');
      }
    }
  };
  

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };


  return (
    <div className="connection">
      <div className=" form">
        <div className="form__header">Підключення до мережі</div>
        <div className="form__body">
          <h2>Крок {step} з {questions.length}</h2>
          <form>
            {questions.slice(0, step).map((question, index) => (
              <div key={index}>
                {step === index + 1 && (
                  <label>
                    {question.label}:
                    <input
                      type="text"
                      name={question.name}
                      value={formData[question.name]}
                      onChange={handleInputChange}
                      placeholder={question.label}
                    />
                  </label>
                )}
                
              </div>
            ))}

            <div className="form__buttons">
              <button type="button" onClick={handlePreviousStep} disabled={step === 1}>
                Повернутись
              </button>
              <button type="button" onClick={handleNextStep}>
                {step < questions.length ? 'Далі' : 'Підтвердити'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
