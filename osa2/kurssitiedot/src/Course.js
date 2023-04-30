import React from 'react';

const Header = ({ course }) => 
  <h2>{course.name}</h2>;

const Total = ({ sum }) => 
  <p>total of {sum} exercises</p>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Content = ({ parts }) =>
  parts.map(part => (
    <Part key={part.id} part={part} />
  ))

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  );

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total sum={totalExercises} />
    </div>
  )
}



export default Course;
