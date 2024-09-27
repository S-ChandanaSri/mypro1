import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  Typography,
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

// country data
const countries = [
  { code: "+1", label: "United States" },
  // Add more countries
];

interface PhoneNumberModalProps {
  open: boolean;
  handleClose: () => void;
  handlePhoneNumberContinue: (phoneNumber: string) => void; // Updated function to pass phone number
}

const PhoneNumberModal: React.FC<PhoneNumberModalProps> = ({
  open,
  handleClose,
  handlePhoneNumberContinue, // Pass the phone number to this function
}) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>(countries[0].code);
  const [agreeToAppLink, setAgreeToAppLink] = useState<boolean>(false);

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountryCode(event.target.value);
  };

  const handleAgreeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgreeToAppLink(event.target.checked);
  };

  const onContinue = () => {
    const fullPhoneNumber = `${countryCode}${phoneNumber}`;
    handlePhoneNumberContinue(fullPhoneNumber);
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
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2">
          Create Your Profile
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          Step 1 of 3: Confirm your Phone number
        </Typography>

        <TextField
          select
          label="Country/Region"
          value={countryCode}
          onChange={handleCountryChange}
          fullWidth
          margin="normal"
        >
          {countries.map((option) => (
            <MenuItem key={option.code} value={option.code}>
              {option.label} ({option.code})
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Phone number"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneChange}
          fullWidth
          margin="normal"
        />

        <FormControlLabel
          control={
            <Checkbox checked={agreeToAppLink} onChange={handleAgreeChange} />
          }
          label="Text me a link to the free Zenden App"
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={onContinue}
          sx={{ mt: 2 }}
        >
          Continue
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

// OTP Modal Component (Step 2)

interface OTPModalProps {
  open: boolean;
  handleClose: () => void;
  handleOTPContinue: (otp: string) => void;
}

const OTPModal: React.FC<OTPModalProps> = ({
  open,
  handleClose,
  handleOTPContinue,
}) => {
  const [otp, setOtp] = useState<string>("");

  const handleOtpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(event.target.value);
  };
  const onContinue = () => {
    handleOTPContinue(otp);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="otp-modal-title"
      aria-describedby="otp-modal-description"
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
        }}
      >
        <Typography id="otp-modal-title" variant="h6" component="h2">
          Create Your Profile
        </Typography>
        <Typography id="otp-modal-description" sx={{ mt: 2 }}>
          Step 2 of 3: Confirm your number
        </Typography>

        <TextField
          label="Enter the 4-digit code sent to you"
          value={otp}
          onChange={handleOtpChange}
          fullWidth
          margin="normal"
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={onContinue} // Call onContinue to pass the OTP
          disabled={otp.length !== 4} // Ensure OTP is 4 digits before allowing continue
        >
          Continue
        </Button>

        <Typography sx={{ mt: 2, textAlign: "center" }}>
          Didnt get a text? <a href="#">Send again</a> <br />
          <a href="#">Call me instead</a>
        </Typography>

        <Button
          variant="text"
          color="secondary"
          fullWidth
          onClick={handleClose}
          sx={{ mt: 2 }}
        >
          I will do this later
        </Button>
      </Box>
    </Modal>
  );
};

export { PhoneNumberModal, OTPModal };
