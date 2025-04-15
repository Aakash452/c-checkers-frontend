import React, { useState } from "react";
import "../styles/Image_preview.css"

const Image_Preview = ({ imageUrl, category }) => {
  const [previewImage, setPreviewImage] = useState(null); // Store clicked image
  const secretKey = process.env.REACT_APP_BACKEND_URL 

  return (
    <div>
      {/* Product Image */}
      <img
        src={`${secretKey}/products/image/${category}/${imageUrl}`}
        alt="Product"
        onClick={() => setPreviewImage(imageUrl)} // Open Image Preview
        style={{
          width: "50px",
          height: "50px",
          objectFit: "cover",
          cursor: "pointer",
        }}
      />

      {/* Full-Screen Image Preview */}
      {previewImage && (
        <div
          className="image-preview-overlay"
          onClick={() => setPreviewImage(null)} // Close on Click
        >
          <img
            src={`${secretKey}/products/image/${category}/${previewImage}`}
            alt="Preview"
            className="image-preview"
          />
        </div>
      )}
    </div>
  );
};

export default Image_Preview;
