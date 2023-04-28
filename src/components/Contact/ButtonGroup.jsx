import React, { useState } from 'react'

const ButtonGroup = (props) => {

    const handleClick = () => {
        event.preventDefault();
    }

  return (
    <div className="flex flex-wrap shadow-sm" role="group">
      {props?.projectType?.map((project, index) => (
        <button
          type="button"
          key={project?.id}
          className={`group-btn ${project?.id === 2}? 'active-btn' : ''`}
          onClick={() => handleClick()}
        >
          {project?.type}
        </button>
      ))}
      {props?.serviceType?.map((service, index) => (
        <button
          type="button"
          key={service?.id}
          className='group-btn active-btn'
          onClick={() => handleClick()}
        >
          {service?.type}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup