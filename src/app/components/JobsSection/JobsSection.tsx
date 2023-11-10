import React from 'react';
import { JOBS } from './constants';
import Job from './Job';

const JobsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row p-2">
      {JOBS.map((job) => (
        <Job key={job.company} {...job} />
      ))}
    </div>
  );
};

export default JobsSection;
