import React from "react";
import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
import Image from "next/image";
import { svgs } from "@/constants/images";

interface ZendenWelcomeModalProps {
  open: boolean;
  handleClose: () => void;
  handleContinue: () => void;
}

const ZendenWelcomeModal: React.FC<ZendenWelcomeModalProps> = ({
  open,
  handleClose,
  handleContinue,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: 24,
          outline: "none",
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        >
          <Image src={svgs.close} alt="Close" width={24} height={24} />{" "}
          {/* Use your image here */}
        </IconButton>

        <Image
          src={svgs.logoblue}
          alt="Zenden Logo"
          width={150}
          height={150}
          style={{ marginBottom: "20px", marginLeft: "30%" }}
        />

        <Typography variant="h6">Welcome to Zenden</Typography>
        <Typography variant="body1" sx={{ marginTop: "10px" }}>
          Discover places to stay and unique experiences across the globe.
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#012a61",
            color: "white",
            marginTop: "20px",
            "&:hover": {
              backgroundColor: "#011d44",
            },
          }}
          onClick={handleContinue}
        >
          Continue
        </Button>
      </Box>
    </Modal>
  );
};

export default ZendenWelcomeModal;
