import React, { useState, useEffect } from "react";
import { VictoryChart, VictoryPie } from "victory";

const InstructorHome = () => {
  const [totalStudents, setTotalStudents] = useState(0);
  const [courseSellEarnings, setCourseSellEarnings] = useState(0);
  const [totalInstructors, setTotalInstructors] = useState(0);
  const [availableCourses, setAvailableCourses] = useState(0);

  useEffect(() => {
    // Mock data fetching or API calls
    setTotalStudents(2500);
    setCourseSellEarnings(75000);
    setTotalInstructors(50);
    setAvailableCourses(100);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>

      <div className="flex flex-wrap -m-4">
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="bg-blue-500 text-white p-4 rounded-lg">
            <h2 className="text-2xl font-semibold">{totalStudents}</h2>
            <p>Total Students</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="bg-green-500 text-white p-4 rounded-lg">
            <h2 className="text-2xl font-semibold">${courseSellEarnings}</h2>
            <p>Course Sell Earnings</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="bg-purple-500 text-white p-4 rounded-lg">
            <h2 className="text-2xl font-semibold">{totalInstructors}</h2>
            <p>All Instructors</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="bg-yellow-500 text-white p-4 rounded-lg">
            <h2 className="text-2xl font-semibold">{availableCourses}</h2>
            <p>Available Courses</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Earnings Chart</h2>
        <div className="chart">
          <VictoryChart width={400} height={400}>
            <VictoryPie
              data={[
                { x: "Total Students", y: totalStudents },
                { x: "Course Sell Earnings", y: courseSellEarnings },
                { x: "All Instructors", y: totalInstructors },
                { x: "Available Courses", y: availableCourses },
              ]}
              innerRadius={100}
              labelRadius={150}
              labels={[
                "Total Students",
                "Course Sell Earnings",
                "All Instructors",
                "Available Courses",
              ]}
              colorScale={["#FF5733", "#33FF57", "#3366FF", "#FF33E0"]}
            />
          </VictoryChart>
        </div>
      </div>
    </div>
  );
};

export default InstructorHome;
