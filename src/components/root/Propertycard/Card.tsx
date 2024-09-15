import React from "react";
import { styled } from "@mui/material/styles";
import Muicard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import { CardMedia } from "@mui/material";
import Image from 'next/image';
import Button from '@/components/common/Button'; 

const StyledCard = styled(Muicard)(({ theme }) => ({
  maxWidth: 500,
  margin: "0 auto",
  marginBottom: "1rem",
  marginTop: "1rem",
}));

const Card = ({ title, content, image, location, icons, sublabels, buttonLabel,buttonVariant }) => {
  return (
    <StyledCard sx={{ minWidth: 300 }} elevation={5}>
      <CardMedia
        component="img"
        alt="projects"
        height="200"
        image={image.src} 
        loading="lazy"
      />
    

      <CardContent>
        <p>{title}</p>
        <p className=" ">{location}</p>
      </CardContent>

      <CardContent>
        <div className="flex justify-between  ">
          {icons.map((icon, idx) => (
            <div key={idx} className="flex items-center">
              <Image src={icon} alt={`icon-${idx}`} width={20} height={20} />
              <p className="ml-2">{sublabels[idx]}</p>
            </div>
          ))}
        </div>
      </CardContent>


      {buttonLabel && (
        <div className="pr-[140px] pb-[1rem] ">
          <Button variant={buttonVariant}>
            {buttonLabel}
          </Button>
        </div>
      )}
    </StyledCard>
  );
};

export default Card;
