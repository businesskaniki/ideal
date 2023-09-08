import React, { useState } from "react";
import "./addmedia.css";
import DraApp from "../dragable/DraApp";

const AddMedia = () => {
  const [formData, setFormData] = useState({
    title: "",
    textField: "",
    selectField: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log(formData);
  };
  return (
    <div className="addmedia-container">
      <h2 className="add-media-heading">Add your Photos and Videos Here</h2>

      <div className="content-wraper-addmedia">
        <div className="draggapp-div">
          <DraApp />
        </div>
        <div className="addmedia-form-div">
          <div>
            <form onSubmit={handleSubmit} className="addmedia-form">
              <div>
                <label htmlFor="normalField">Normal Field:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.normalField}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="textField">Text Field:</label>
                <textarea
                  id="textField"
                  name="textField"
                  value={formData.textField}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="selectField">Select Field:</label>
                <select
                  id="selectField"
                  name="selectField"
                  value={formData.selectField}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="option1">
                    {" "}
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                  </option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMedia;
