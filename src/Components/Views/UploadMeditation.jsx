import React from "react";
import axios from "../../Util/axiosInstance";

export default function UploadMeditation() {
  const handleSubmitForm2 = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
      link: formData.get("link"),
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
      <h1>upload your Meditation</h1>
      <form className="upload-form" onSubmit={handleSubmitForm2}>
        <label>
          <input name="title" type="text" placeholder="Title" required={true} />
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
            name="link"
            type="text"
            placeholder="link the meditation"
            required={true}
          />
        </label>
        <label>
          <input
            name="time"
            type="text"
            placeholder="Time should be 5 or 10 or 20 min"
            required={true}
          />
        </label>
        <button>save</button>
      </form>
    </div>
  );
}
