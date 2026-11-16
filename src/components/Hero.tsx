import { FC } from "react";
import { PORTAL_CONFIG } from "@/config/links";
import { DestinationCard } from "@/components/DestinationCard";

export const Hero: FC = () => {
  const { name, tagline, supportingText, statusLabel, destinations } = PORTAL_CONFIG;

  return (
    <section aria-label="Central Personal Portal Introduction">
      <header>
        <div>
          <span aria-hidden="true">•</span>
          <span>{statusLabel}</span>
        </div>
      </header>

      <div>
        <h1>{name}</h1>
        <p>{tagline}</p>
        <p>&ldquo;{supportingText}&rdquo;</p>
      </div>

      <nav aria-label="Primary Destinations">
        <div>
          <DestinationCard
            index={destinations.portfolio.index}
            title={destinations.portfolio.title}
            description={destinations.portfolio.description}
            cta={destinations.portfolio.cta}
            url={destinations.portfolio.url}
            ariaLabel="Navigate to Jayanthan Senthilkumar's Personal Portfolio"
          />

          <DestinationCard
            index={destinations.blogs.index}
            title={destinations.blogs.title}
            description={destinations.blogs.description}
            cta={destinations.blogs.cta}
            url={destinations.blogs.url}
            ariaLabel="Navigate to Jayanthan Senthilkumar's Technical Blogs"
          />
        </div>
      </nav>
    </section>
  );
};
