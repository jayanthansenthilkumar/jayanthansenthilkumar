import { FC } from "react";
import { ArrowUpRight } from "lucide-react";
import { PORTAL_CONFIG } from "@/config/links";

export const DestinationLinks: FC = () => {
  const { destinations } = PORTAL_CONFIG;

  return (
    <div>
      {/* Destination 01: My Portfolio */}
      <a
        href={destinations.portfolio.url}
        aria-label="Navigate to Jayanthan Senthilkumar's Personal Portfolio"
      >
        <div>
          <span>{destinations.portfolio.index} — </span>
          <h2>{destinations.portfolio.title}</h2>
          <ArrowUpRight aria-hidden="true" />
        </div>
        <p>{destinations.portfolio.subtitle}</p>
      </a>

      {/* Destination 02: My Blogs */}
      <a
        href={destinations.blogs.url}
        aria-label="Navigate to Jayanthan Senthilkumar's Personal Blogs"
      >
        <div>
          <span>{destinations.blogs.index} — </span>
          <h2>{destinations.blogs.title}</h2>
          <ArrowUpRight aria-hidden="true" />
        </div>
        <p>{destinations.blogs.subtitle}</p>
      </a>
    </div>
  );
};
