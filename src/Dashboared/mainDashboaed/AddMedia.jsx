import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTags, addTags } from "../../Redux/axios/Tag";
import "./addmedia.css";
import DraApp from "../dragable/DraApp";

const AddMedia = () => {
  const dispatch = useDispatch();
  const Tags = useSelector((state) => state.Tags);

  const initialTagData = {
    name: "",
    description: "",
  };

  const [tagData, setTagData] = useState(initialTagData);
  const [tagErrors, setTagErrors] = useState({});
  const [serverErrors, setServerErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (e, dataSetter) => {
    const { name, value } = e.target;
    dataSetter((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors, loading, and success message
    setTagErrors({});
    setServerErrors(null);
    setLoading(true);
    setSuccessMessage(null);

    // Validate tagData before submitting
    if (validateTagData()) {
      try {
        await dispatch(addTags(tagData));
        setTagData(initialTagData);
      } catch (error) {
        if (error.response && error.response.data) {
          setServerErrors(error.response.data.error);
        } else {
          setServerErrors("An error occurred. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const validateTagData = () => {
    const errors = {};

    if (!tagData.name.trim()) {
      errors.name = "Name is required.";
    }

    if (!tagData.description.trim()) {
      errors.description = "Description is required.";
    }

    setTagErrors(errors);

    // Return true if there are no errors, false otherwise
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    if (Tags.length === 0) {
      dispatch(getTags());
    }
  }, [dispatch, Tags]);

  return (
    <div className="addmedia-container">
      <h2 className="add-media-heading">Add your Photos and Videos Here</h2>

      <div className="content-wrapper-addmedia">
        <div className="draggable-div">
          <DraApp />
        </div>
        <div className="addmedia-form-div">
          <form onSubmit={handleSubmit} className="addmedia-form">
          <div className="add-tag-form">
            <h3>Add Tag</h3>
            {serverErrors && <span className="error">{serverErrors}</span>}
            {successMessage && (
              <span className="success-message">{successMessage}</span>
            )}
            <div>
              <input
                type="text"
                id="tagTitle"
                name="name"
                value={tagData.name}
                onChange={(e) => handleInputChange(e, setTagData)}
                placeholder="Title"
              />
              {tagErrors.name && <span className="error">{tagErrors.name}</span>}
            </div>
            <div>
              <textarea
                id="tagDescription"
                name="description"
                value={tagData.description}
                onChange={(e) => handleInputChange(e, setTagData)}
                placeholder="Description"
              />
              {tagErrors.description && (
                <span className="error">{tagErrors.description}</span>
              )}
            </div>
          </div>
            <button type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add Tag"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMedia;
