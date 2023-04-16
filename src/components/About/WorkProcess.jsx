import React from "react";
import {workProcess} from '../../data/workProcesses';

const WorkProcess = () => {
  return (
    <div className="flex flex-col p-20 flex-wrap">
      <h2 className="font-bold text-[#A30CFF] text-5xl break-words">
        Our Work Process
      </h2>
      <br />
      <h2 className="font-bold text-5xl mb-10 break-words">
        Design to Developing a Product
      </h2>

      <div className="flex flex-wrap gap-2">
        {workProcess?.map((process) => (
          <div
            key={process?.id}
            className="block max-w-sm p-6 bg-[#B5D1FF] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-[#A30CFF] dark:text-white">
              0{process?.id}
            </h5>
            <p className="font-semibold text-gray-700 dark:text-gray-400">
              {process?.process}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
