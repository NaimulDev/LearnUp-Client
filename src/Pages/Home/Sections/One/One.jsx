import book from "../../../../assets/icons/books.png";
import OneCompo from "./OneCompo";
import React, { useEffect, useState } from 'react';

const One = () => {
  const [courseCount, setCourseCount] = useState(7500);
  const [instructorCount, setInstructorCount] = useState(15000);
  const [studentCount, setStudentCount] = useState(750000);
  const [satisfactionRate, setSatisfactionRate] = useState(110);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCourseCount(8000);
      setInstructorCount(1600);
      setStudentCount(170000);
      setSatisfactionRate(100);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="bg-accent sm:h-96 py-8 md:py-0 md:h-60">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:pt-16 md:pt-20">
        <OneCompo id="courseCounter" image={book} number={courseCount} text={"Course"} />
        <OneCompo id="instructorCounter" image={book} number={instructorCount} text={"INSTRUCTORS"} />
        <OneCompo id="studentCounter" image={book} number={studentCount} text={"STUDENTS"} />
        <OneCompo id="satisfactionCounter" image={book} number={satisfactionRate} text={"SATISFACTION"} />
      </div>
    </div>
  );
};

export default One;
