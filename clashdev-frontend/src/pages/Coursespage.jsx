import React from "react";

const courses = [
  {
    id: 1,
    name: "Clash of Code",
    description: "Battle through coding challenges in the arena.",
    difficulty: "Intermediate",
    duration: "4 weeks",
    points: 300,
    bgColor: "bg-purple-900",
    textColor: "text-yellow-300",
    progress: 70, // Progress percentage
  },
  {
    id: 2,
    name: "Supercell Strategy",
    description: "Master the art of strategy in real-time battles.",
    difficulty: "Advanced",
    duration: "6 weeks",
    points: 500,
    bgColor: "bg-green-800",
    textColor: "text-white",
    progress: 45, // Progress percentage
  },
  {
    id: 3,
    name: "Creative Coding",
    description: "Unleash your creativity with dynamic game coding.",
    difficulty: "Beginner",
    duration: "3 weeks",
    points: 200,
    bgColor: "bg-blue-900",
    textColor: "text-yellow-500",
    progress: 85, // Progress percentage
  },
];

const CourseCard = ({ course }) => {
  return (
    <div
      className={`${course.bgColor} ${course.textColor} p-5 rounded-lg shadow-lg hover:shadow-xl transition duration-300 w-full`}
    >
      <h2 className="text-2xl font-bold">{course.name}</h2>
      <p className="mt-2">{course.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm">{course.difficulty}</span>
        <span className="text-sm">{course.duration}</span>
      </div>
      <div className="mt-3 flex items-center">
        <div className="bg-gray-600 h-2 w-full rounded-full mr-2">
          <div
            className="bg-yellow-400 h-full rounded-full"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
        <div className="text-right font-bold">{course.progress}% Completed</div>
      </div>
      <div className="mt-3 text-right font-bold">{course.points} Points</div>
    </div>
  );
};

const CoursesPage = () => {
  return (
    <div className="bg-gray-800 min-h-screen py-10 px-5">
      <h1 className="text-4xl text-yellow-400 text-center mb-8">Courses</h1>
      <div className="flex flex-col space-y-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
