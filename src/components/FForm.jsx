import { useState } from "react";
import "../assets/Styles/Form.css";

const FForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    questions: [
      {
        questionText: "",
        type: "text",
        answer: "",
        file: null,
        date: "",
        time: "",
        // checkbox:[],
        //   radio:"",
        //   dropdown:[],
      },
    ],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      questionText: "",
      type: "text",
      answer: "",
      file: null,
      date: "",
      time: "",
      //   checkbox:[],
      //   radio:[],
      //   dropdown:[],
    };

    setFormData({
      ...formData,
      questions: [...formData.questions, newQuestion],
    });
    // console.log(setFormData);
  };

  const handleQuestionChange = (e, questionIndex) => {
    const updatedQuestions = [...formData.questions];
    const { name, value } = e.target;
    updatedQuestions[questionIndex][name] = value;
    setFormData({ ...formData, questions: updatedQuestions });
    // console.log(updatedQuestions);
    // console.log(setFormData);
  };

  const handleFileUpload = (questionIndex, e) => {
    const updatedQuestions = [...formData.questions];
    const file = e.target.files[0];

    updatedQuestions[questionIndex].file = file;

    setFormData({ ...formData, questions: updatedQuestions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="main-container">
        <div className="main-title">
          <div>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Untitled Form"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              id="description"
              name="description"
              placeholder="Form description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="question-ans-container">
          {formData.questions.map((question, questionIndex) => (
            <div key={questionIndex}>
              <input
                type="text"
                name="questionText"
                placeholder="Question"
                value={question.questionText}
                onChange={(e) => handleQuestionChange(e, questionIndex)}
              />
              <select
                name="type"
                value={question.type}
                onChange={(e) => handleQuestionChange(e, questionIndex)}
              >
                <option value="text">Short Answer</option>
                <option value="file">File Upload</option>
                <option value="date">Date</option>
                <option value="time">Time</option>
                {/*  <option value="dropdown">Dropdown</option>
          <option value="radio">Multiple Choice(radio btn)</option>
          <option value="checkbox">Checkbox</option> */}
              </select>
              {question.type === "text" && (
                <div>
                  <input
                    name="answer"
                    placeholder="Answer"
                    value={question.answer}
                    onChange={(e) => handleQuestionChange(e, questionIndex)}
                  />
                </div>
              )}
              {question.type === "file" && (
                <div>
                  <input
                    type="file"
                    name="fileUpload"
                    onChange={(e) => handleFileUpload(questionIndex, e)}
                  />
                </div>
              )}
              {question.type === "date" && (
                <div>
                  <input
                    type="date"
                    name="date"
                    value={question.date}
                    onChange={(e) => handleQuestionChange(e, questionIndex)}
                  />
                </div>
              )}
              {question.type === "time" && (
                <div>
                  <input
                    type="time"
                    name="time"
                    value={question.time}
                    onChange={(e) => handleQuestionChange(e, questionIndex)}
                  />
                </div>
              )}
              {/* {question.type === "radio" && (
//                   <div>
//                     <div>
//                       <input
//                         type="radio"
//                         name="options"
//                         placeholder={"Option"}
//                         value={question.options}
//                       />
//                     </div>

//                     <button type="button" onClick={handleAddOption}>
//                       Add Option
//                     </button>
//                   </div>
//                 )}
//                 {question.type === "checkbox" && (
//                   <div>
//                     <div>
//                       <input
//                         type="checkbox"
//                         name="options"
//                         placeholder={"option"}
//                         value={question.options}
//                       />
//                     </div>

//                     <button type="button" onClick={handleAddOption}>
//                       Add Option
//                     </button>
//                   </div>
//                 )}

//                 {question.type === "dropdown" && (
//                   <div>
//                     <div>
//                       <input
//                         type="text"
//                         name="options"
//                         placeholder={"option"}
//                         value={question.options}
//                       />
//                     </div>

//                     <button type="button" onClick={handleAddOption}>
//                       Add Option
//                     </button>
//                   </div>
//                 )} */}
            </div>
          ))}
        </div>
      </div>
      <button type="button" onClick={handleAddQuestion}>
        Add Question
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FForm;
