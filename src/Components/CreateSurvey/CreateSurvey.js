import React, {useState} from 'react';
import Survey from './Survey'

const CreateSurvey = (props) => {
    const [surveys, setSurveys] = useState([])    

    return (
        <div className="create-survey-container">
            <Survey surveys={surveys} setSurveys={setSurveys} ></Survey>                    
        </div>
    )
}

export default CreateSurvey;