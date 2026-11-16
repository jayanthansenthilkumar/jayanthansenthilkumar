import { FC } from "react";
import { ArrowUpRight } from "lucide-react";

interface DestinationCardProps {
  index: string;
  title: string;
  description: string;
  cta: string;
  url: string;
  ariaLabel: string;
}

export const DestinationCard: FC<DestinationCardProps> = ({
  index,
  title,
  description,
  cta,
  url,
  ariaLabel,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      <div>
        <span>{index} — </span>
        <h2>{title}</h2>
        <ArrowUpRight aria-hidden="true" />
      </div>
      <p>{description}</p>
      <div>
        <span>{cta}</span>
      </div>
    </a>
  );
};
