import React from "react";
import { useState } from "react";
import { partOfWebService } from "../../data/services"

const Path = () => {
  const [typeOfService,setTypeOfService] = useState(partOfWebService)

  const filter  = (type) =>{
      setTypeOfService(partOfWebService.filter(service=> service.type === type))
      
  }
  return (
    <div className="flex p-16">
      <div className="w-4/5 flex flex-wrap gap-10">
        {typeOfService.map(cate =>{
          return (
            <div
              key={cate.id}
              className=" select-none block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {cate.service}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {cate.categeory}
              </p>
            </div>
          );
        })}
        
        
      </div>
      <div className=" w-1/5 flex flex-col gap-10">
        <button onClick={()=>filter("ui/ux")} className=" bg-[#A30CFF] text-white rounded-[100%] w-32 h-32 flex items-center justify-center">
          <h2>UI/UX</h2>
        </button>
        <button onClick={()=>filter("frontend")} className=" bg-[#A30CFF] text-white rounded-[100%] w-32 h-32 flex items-center justify-center">
          <h2>F</h2>
        </button>
        <button onClick={()=>filter("backend")} className=" bg-[#A30CFF] text-white rounded-[100%] w-32 h-32 flex items-center justify-center">
          <h2>B</h2>
        </button>
      </div>
    </div>
  );
};

export default Path;
