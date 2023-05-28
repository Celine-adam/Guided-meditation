import React from "react";

export default function UploadMeditation() {
  return (
    <div>
      <form>
        {/* set the name of input to image  */}
        <input type="file" name="image" multiple={false} />
        <button>Upload</button>
      </form>
    </div>
  );
}
