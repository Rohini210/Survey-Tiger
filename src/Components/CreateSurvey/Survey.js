import React, { useState, Fragment } from "react"
import _create_survey from "./_create_survey.css"

const Survey = (props) => {
  const [surveyType, setSurveyType] = useState("defaultValue")
  const [options, setOptions] = useState([{ value: "", id: Date.now() }])
  // const [question, setQuestions] = useState('');

  const onAddItem = () => {
    //add{value : '', id:Date.now()} to the existing options ARRAY
    if (surveyType === 'single' && options.length === 2)
      return;
    
    const updatedOptions = [...options]
    updatedOptions.push({ value: "", id: Date.now() })
    setOptions(updatedOptions)
  }

  const onAddAnswer = (text, id) => {
    const optionsCopy = [...options]
    const updatedOptions = optionsCopy.map((option) => {
      if (option.id === id) {
        return { ...option, value: text }
      } else {
        return option
      }
    })
    setOptions(updatedOptions)
  }

  const onRemoveItem = (id) => {
    const updatedOptions = options.filter(option => option.id != id);
    setOptions(updatedOptions);
  }

  const addSurvey = () => {
    
  }

  return (
    <Fragment>

      <div className="question-type-container">
        <select
          name="survey"
          value={surveyType}
          onChange={(evt) => {
            setSurveyType(evt.target.value)
            setOptions([{value:'', id:Date.now()}])
          }}
        >
          <option value="defaultValue">Select question type</option>
          <option value="multi">Multi-select</option>
          <option value="single">Single select</option>
        </select>
      </div>
      {surveyType != "defaultValue" ? (
        <div className="survey-container">
          <input
            type="text"
            placeholder="Enter your question here"
            className="question-container"
            value={props.question}
            onChange={(evt) => {
              props.setQuestions(evt.target.value);
            }} />
          <br></br>
          <br></br>
          <span>Options</span>

          {options.map((option) => (
            <div className="answer-container" key={"option.id"}>
              <input
                type="text"
                placeholder="Type answer here"
                value={option.value}
                onChange={(evt) => {
                  onAddAnswer(evt.target.value, option.id)
                }}
              />              
                <span onClick={onAddItem}>➕</span>
                <span onClick={() => {
                  onRemoveItem(option.id)
                  }}>➖</span>              
            </div>
          ))}

          {(surveyType === 'multi' && options.length >= 4) || (surveyType === 'single' && options.length === 2)?
          ( <div>
            <button onClick={addSurvey}>Add Question</button>
            <button>Publish</button>
          </div>) : null}
        </div>
      ) : null}

    </Fragment>
  )
}

export default Survey
