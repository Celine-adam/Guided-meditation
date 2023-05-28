import React, { useState, useEffect } from "react";
import axios from "../../Util/axiosInstance";

export default function UploadMeditation() {
  const [uploadedImage, setUploadedImage] = useState(null);
  useEffect(() => {
    console.log(uploadedImage);
  }, [uploadedImage]);

  const onSubmitForm = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    //POST request to the server with the filedata
    try {
      const res = await axios.post("/api/files/create", formData);

      console.log("the response is ", res);
      setUploadedImage(res.data.newFile._id);
      console.log(uploadedImage);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="upload-section">
      <form className="upload-form" onSubmit={onSubmitForm}>
        {/* set the name of input to image  */}
        <input type="file" name="image" multiple={false} />
        <button>Upload</button>
      </form>
      {uploadedImage && <img src={`/api/files/byid/${uploadedImage}`} alt="" />}
    </div>
  );
}
