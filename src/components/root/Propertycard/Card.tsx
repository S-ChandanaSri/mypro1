import React from "react";
import { styled } from "@mui/material/styles";
import Muicard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import Image from 'next/image';
import Button from '@/components/common/Button';
import {CardProps} from '../../../constants/types';


const StyledCard = styled(Muicard)(({ theme }) => ({
    maxWidth: 1100,
    margin: "0 auto",
    marginBottom: "1rem",
    marginTop: "1rem",
}));

const Card: React.FC<CardProps> = ({
                                       title,
                                       content,
                                       leftButtonLabel,
                                       image,
                                       images=[],
                                       locate,
                                       km,
                                       location,
                                       placestyle,
                                       icons = [],
                                       sublabels = [],
                                       buttonLabel,
                                       buttonVariant,
                                       imageStyles = [],
                                       fullStyles,
                                       detailsstyle,
                                       titlestyle,
                                       locationstyle,
                                       amenitystyle,
                                       buttonstyle,
                                       butonstyle,
                                       price,
                                       pricestyle,
                                       star,
                                       rating,
                                       rate,
                                       ratepoint,
                                       wrapstyle,
                                       ratepointstyle,
                                       multiImage = false
                                   }) => {
    return (
        <StyledCard className={`min-w-[300px] ${multiImage ? 'lg:w-full lg:h-[250px]' : 'w-full min-h-[350px]'}`} elevation={0}>
            <div className={`flex ${multiImage ? 'flex-row lg:h-full ' : 'flex-col'}`}>
                <div className={`${multiImage ? 'gap-1 flex lg:flex-row flex-col w-[100%] ' : 'w-full'}`}>
                    {multiImage ? (
                        <div className="flex flex-row gap-2">
                            {images?.[0]?.src && (
                                <CardMedia
                                    component="img"
                                    alt="main-image"
                                    sx={{ height: 180, width: 200, objectFit: 'cover' }}
                                    className={imageStyles[0] || ''}
                                    image={images[0].src}
                                    loading="lazy"
                                />
                            )}
                            <div className="flex flex-col gap-1">
                                {images?.slice(1).map((img, idx) => (
                                    <CardMedia
                                        key={idx}
                                        component="img"
                                        alt={`additional-image-${idx}`}
                                        sx={{ height: 90, width: 90, objectFit: 'cover' }}
                                        className={imageStyles[idx + 1] || ''}
                                        image={img.src}
                                        loading="lazy"
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (

                            <CardMedia
                                component="img"
                                alt="project"
                                sx={{ height: 180, width: '100%', objectFit: 'cover' }}
                                image={image.src}
                                loading="lazy"
                            />

                    )}
                </div>

                <div className={`${detailsstyle || ''} w-full mt-4`}>
                    {title && (
                        <CardContent>
                            <p className={`${titlestyle}`}>{title}</p>
                        </CardContent>
                    )}

                    <CardContent className={`${placestyle}`}>
                        <p className={`${locationstyle}`}>{location}</p>
                        {locate && <Image src={locate} alt="" />}
                        <p>{km}</p>
                    </CardContent>

                    {multiImage && ratepoint && star && rating && rate && (
                        <CardContent className={`${wrapstyle}`}>
                            <div className="flex flex-row gap-2 items-center">
                                <div className={`${ratepointstyle}`}>
                                    {ratepoint}
                                    {star && (
                                        <div className="relative w-3 h-3">
                                            <Image
                                                src={star}
                                                alt=""
                                                fill={true}
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                </div>
                                <p className="text-xs">
                                    {rating} <span>{rate}</span>
                                </p>
                            </div>
                        </CardContent>
                    )}

                    <CardContent>
                        <div className={`${amenitystyle}`}>
                            {icons.map((icon, idx) => (
                                <div key={idx} className="flex items-center">
                                    <Image src={icon} alt="" width={20} height={20} />
                                    <p className="ml-2">{sublabels[idx]}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>

                    {buttonLabel && (
                        <div className={`${pricestyle}`}>
                            <div className="text-left">{price}</div>

                            <div className={`flex items-center space-x-2 ${buttonstyle}`}>
                                {multiImage && (
                                    <Button className={`${butonstyle}`}>
                                        {leftButtonLabel}
                                    </Button>
                                )}
                                <Button variant={buttonVariant}>{buttonLabel}</Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </StyledCard>
    );
};

export default Card;


