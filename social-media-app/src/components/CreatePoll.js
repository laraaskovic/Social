import React, { useState } from 'react';
import './styles.css';

const CreatePoll = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit poll data to backend
  };

  return (
    <div className="create-poll-container">
      <h2>Create a Poll</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <div className="options">
          {options.map((option, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Option ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              required
            />
          ))}
          <button type="button" onClick={addOption}>Add Option</button>
        </div>
        <button type="submit" className="submit-poll-btn">Submit Poll</button>
      </form>
    </div>
  );
};

export default CreatePoll;
