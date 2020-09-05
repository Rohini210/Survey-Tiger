import React, {useState} from 'react';
import Survey from './Survey'

const CreateSurvey = (props) => {

    const [surveys, setSurveys] = useState([
        { question: "", options: [{ value: "", id: Date.now() }], surveyType: '' }
    ])
    return (
        <div className="create-survey-container">
            {surveys.map(survey => {
                return <Survey question={surveys.question} options={survey.options} surveyType={survey.surveyType}></Survey>
            })}                        
        </div>
    )
}

export default CreateSurvey;