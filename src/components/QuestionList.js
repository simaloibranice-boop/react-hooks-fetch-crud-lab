import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {
  const questionItems = questions.map((q) => (
    <QuestionItem
      key={q.id}
      question={q}
      setQuestions={setQuestions}
    />
  ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default QuestionList;
