import React from 'react';
import "./addmedia.css";
import DraApp from '../dragable/DraApp';

const AddMedia = () => {
  return (
    <div className='addmedia-container'>
        <h2>Add photos and videos here</h2>
        <div>
            <DraApp />
        </div>
    </div>
  )
}

export default AddMedia