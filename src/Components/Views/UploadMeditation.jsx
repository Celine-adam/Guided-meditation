import React, { useState, useEffect } from "react";
import axios from "../../Util/axiosInstance";

export default function UploadMeditation() {
  const [audioId, setAudioId] = useState(null);
  const [imageId, setImageId] = useState(null);
  useEffect(() => {
    console.log(audioId, imageId);
  }, [audioId, imageId]);

  const handleAudioUpload = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const res = await axios.post("/api/files/create", formData);

      console.log("the response is ", res);
      setAudioId(res.data.newFile._id);
      console.log(audioId);
    } catch (error) {
      console.error(error);
    }
  };
  const handleImageUpload = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const res = await axios.post("/api/files/create", formData);

      console.log("the response is ", res);
      setImageId(res.data.newFile._id);
      console.log(audioId);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmitForm2 = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
      audio: audioId,
      time: formData.get("time"),
    };
    try {
      const res = await axios.post("/api/meditations/create", data);
      console.log(res.data);
    } catch (error) {
      console.error("there was an error", error);
    }
  };
  return (
    <div className="upload-section">
      <div className="upload-container ">
        <h1>upload your Meditation</h1>

        <form className="file-form">
          <input type="file" name="file" multiple={false} />
          <button onClick={handleAudioUpload}>Upload audio</button>
          <input type="file" name="file" multiple={false} />
          <button onClick={handleImageUpload}>Upload image</button>
        </form>

        <form className="upload-form" onSubmit={handleSubmitForm2}>
          <label>
            <input
              name="title"
              type="text"
              placeholder="Title"
              required={true}
            />
          </label>
          <label>
            <input
              name="description"
              type="text"
              placeholder="Description"
              required={true}
            />
          </label>
          <label>
            <input
              name="time"
              type="text"
              placeholder="Time of Mp3"
              required={true}
            />
          </label>

          <button>save</button>
        </form>
      </div>
    </div>
  );
}
