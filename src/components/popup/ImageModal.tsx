import React, { useState } from "react";
import { Box, Button, Modal, Typography, Avatar } from "@mui/material";

interface ImageUploadModalProps {
  open: boolean;
  handleClose: () => void;
  handleContinue: (image: File) => Promise<void>; // Updated to accept the image parameter
}

const ImageUploadModal: React.FC<ImageUploadModalProps> = ({
  open,
  handleClose,
  handleContinue,
}) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null); // State to hold the uploaded file
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      setImageFile(file); // Store the file for uploading
    }
  };

  const handleImageContinue = async () => {
    if (!imageFile) return; // Ensure there is an image file before proceeding

    setIsLoading(true);
    try {
      await handleContinue(imageFile); // Call the continue function with the image file
      setError(null); // Reset error state
    } catch (e) {
      setError("Failed to upload image. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: "8px",
          boxShadow: 24,
          p: 4,
          textAlign: "center",
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2">
          Create Your Profile
        </Typography>

        <Typography id="modal-description" sx={{ mt: 2 }}>
          Step 3 of 3: Add a profile photo
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 2,
          }}
        >
          {uploadedImage ? (
            <>
              <Typography sx={{ mb: 2 }}>Looking good!</Typography>
              <Avatar
                src={uploadedImage}
                alt="Uploaded Image"
                sx={{ width: 150, height: 150 }}
              />
              <Button variant="outlined" component="label" sx={{ mt: 2 }}>
                Change photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  hidden
                />
              </Button>
            </>
          ) : (
            <>
              <Avatar
                sx={{ width: 150, height: 150, backgroundColor: "#e0e0e0" }}
              />
              <Button variant="contained" component="label" sx={{ mt: 2 }}>
                Upload a photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  hidden
                />
              </Button>
            </>
          )}
        </Box>

        {error && (
          <Typography color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleImageContinue} // Call the continue function here
          sx={{ mt: 2 }}
          disabled={!uploadedImage || isLoading} // Disable until an image is uploaded or if loading
        >
          {isLoading ? "Uploading..." : "Done"}
        </Button>

        <Button
          variant="text"
          color="secondary"
          fullWidth
          onClick={handleClose}
          sx={{ mt: 1 }}
        >
          I will do this later
        </Button>
      </Box>
    </Modal>
  );
};

export default ImageUploadModal;
