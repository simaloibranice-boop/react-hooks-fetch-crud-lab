import React from "react";
import QuestionItem from "./QuestionItem"; 

function QuestionList({ questions, setQuestions }) {
  function handleDeleteQuestion(id) {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  }

  function handleUpdateQuestion(updatedQuestion) {
    setQuestions((prev) =>
      prev.map((q) => (q.id === updatedQuestion.id ? updatedQuestion : q))
    );
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((q) => (
          <QuestionItem
            key={q.id}
            question={q}
            onDeleteQuestion={handleDeleteQuestion}
            onUpdateQuestion={handleUpdateQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
