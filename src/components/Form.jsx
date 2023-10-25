import { useState } from "react";
import "../assets/Styles/Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    questions: [
      {
        questionText: "",
        answer: "",
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
      answer: "",
    };

    setFormData({
      ...formData,
      questions: [...formData.questions, newQuestion],
    });
  };

  const handleQuestionChange = (index, e) => {
    const updatedQuestions = [...formData.questions];
    const { name, value } = e.target;
    updatedQuestions[index][name] = value;
    setFormData({ ...formData, questions: updatedQuestions });
  };
  // const handleQuestionChange = (e) => {
  //   const { name, value } = e.target;
  //   const updatedQuestions = formData.questions.map((question) => ({
  //     ...question,
  //     [name]: value,
  //   }));
  //   setFormData({ ...formData, questions: updatedQuestions });
  // };

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
          <div>
            {formData.questions.map((question, index) => (
              <div key={index}>
                <input
                  type="text"
                  name="questionText"
                  placeholder="Question"
                  value={question.questionText}
                  onChange={(e) => handleQuestionChange(index, e)}
                />
                <input
                  type="text"
                  name="answer"
                  placeholder="Answer"
                  value={question.answer}
                  onChange={(e) => handleQuestionChange(index, e)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <button type="button" onClick={handleAddQuestion}>
        Add Question
      </button>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
