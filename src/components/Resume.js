import React from 'react';
import { Link } from 'react-router-dom';
// import resume-web from '../../assets/resumes/resume-web;
// import resume-ml from '../../assets/resumes/resume-ml';

const Resume = () => {
    const resumeUrl = '../../assets/resumes/resume-web';

  return (
    <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        <Link to={resumeUrl} download="your_resume.pdf">
        Download Resume
        </Link>
    </button>
  );
};

export default Resume