import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './CourseForm.css'; 

const CourseForm = () => {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [lectureNotes, setLectureNotes] = useState('');
  const [coursePrice, setCoursePrice] = useState('');
  const [instructorEmail, setInstructorEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const instructorId = localStorage.getItem('instructorID');
  
    const course = {
      course_name: courseName,
      course_description: courseDescription,
      course_content: {
        lecture_notes: lectureNotes,
      },
      course_price: coursePrice,
      instructor_email: instructorEmail, // Add instructor email
      instructor_id: instructorId, // Add instructor ID from local storage
    };
  
    try {
      await axios.post('http://localhost:4001/api/courses', course);
      await Swal.fire({
        title: 'Success!',
        text: 'Course successfully added.',
        icon: 'success',
      });
      // Redirect to DisplayCourses page after clicking OK
      window.location.href = '/displayCourses';
    } catch (err) {
      alert('Error: Course not added');
      console.error(err);
      setError('Error: Course not added');
    }
  };
  
  

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Course</h3>

      <label>Course Name:</label>
      <input
        type="text"
        onChange={(e) => setCourseName(e.target.value)}
        value={courseName}
        required
      />

      <label>Course Description:</label>
      <input
        type="text"
        onChange={(e) => setCourseDescription(e.target.value)}
        value={courseDescription}
        required
      />

      <label>Lecture Notes:</label>
      <input
        type="text"
        onChange={(e) => setLectureNotes(e.target.value)}
        value={lectureNotes}
        required
      />

      <label>Course Price:</label>
      <input
        type="number"
        min="0"
        step="0.01"
        onChange={(e) => setCoursePrice(e.target.value)}
        value={coursePrice}
        required
      />

      <label>Instructor Email:</label> {/* Add instructor email input field */}
      <input
        type="email"
        onChange={(e) => setInstructorEmail(e.target.value)}
        value={instructorEmail}
        required
      />

      <button type="submit">Add Course</button>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CourseForm;
