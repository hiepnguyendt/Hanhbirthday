import React, {userState} from 'react';

import './LabSubmit.css';

const LabSubmit = props  => {
  const [enteredText, setEnteredText] = userState('');

  const addLab = event => {
    event.preventDefault();

    const newLabSubmit = {
      id: Math.random().toString(),
      text: enteredText
    };
    setEnteredText('');
    props.onAddLab(newLabSubmit);
  };

  const textChangeHandler = e => {
    setEnteredText(e.targer.value);
  };
  return (
    <form className="new-labsumit" onSubmit={addLab}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Your Lab</button>
    </form>
  );
};

export default LabSubmit;
