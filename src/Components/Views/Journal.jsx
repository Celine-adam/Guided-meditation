import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
const defaultState = {
  inputVal: "",
  journal: [],
  isEmpty: false,
};
export default function Journal() {
  const [state, setState] = useState(defaultState);
  function updateValue(e) {
    setState({ ...state, inputVal: e.target.value });
  }
  function addJournal(e) {
    e.preventDefault();
    const currentDate = new Date();
    const options = { month: "long", day: "numeric" };
    const formattedDate = currentDate.toLocaleString(undefined, options);
    const temporary = [...state.journal];

    if (!state.inputVal.length) {
      setState({ ...state, isEmpty: true });
      return;
    }

    temporary.push({
      date: `${formattedDate}`,
      content: `${state.inputVal}`,
      done: false,
    });
    setState({ ...state, journal: temporary, inputVal: "" });

    console.log(state.journal);
  }

  function deleteJournal(index) {
    const journal = state.journal.filter((x, i) => index !== i);
    setState({ ...state, journal });
  }

  return (
    <div id="journal-section">
      <h1>Journal</h1>
      <div className="journal-container">
        <form onSubmit={addJournal} className="journal-form">
          <textarea type="text" onChange={updateValue} value={state.inputVal} />
          <button>Entry</button>
        </form>
        {state.journal.map((journal, index) => (
          <div className="div-journal" key={index}>
            <div className="div-date">
              <p className="journal-date">{journal.date}</p>
              <button onClick={() => deleteJournal(index)}>
                <FaTimes className="remove-icon" />
              </button>
            </div>
            <p className="journal-content">{journal.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
