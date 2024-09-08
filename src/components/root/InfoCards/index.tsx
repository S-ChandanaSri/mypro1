import ServiceCard from "./ServiceCard";
import { ICardInfo } from "@/constants/types";

interface InfoCardsProps {
  title: string;
  subText?: string;
  cards: ICardInfo[];
}

const InfoCards: React.FC<InfoCardsProps> = ({ title, subText, cards }) => {
  return (
    <div className="flex flex-col items-center space-y-8 text-center">
      <h3 className="text-2xl font-medium">
        {title}
        <p className="text-md font-light">{subText}</p>
      </h3>
      <ul className="grid w-max grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((value: ICardInfo, idx: number) => (
          <ServiceCard
            key={idx}
            label={value.label}
            body={value.body}
            iconNode={value.icon}
          />
        ))}
      </ul>
    </div>
  );
};

export default InfoCards;
