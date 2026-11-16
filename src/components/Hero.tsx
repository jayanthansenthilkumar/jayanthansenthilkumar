import { FC } from "react";
import { PORTAL_CONFIG } from "@/config/links";
import { DestinationLinks } from "@/components/DestinationLinks";

export const Hero: FC = () => {
  return (
    <section aria-label="Central Personal Portal Introduction">
      {/* Meta Header Information */}
      <header>
        <div>
          <span>{PORTAL_CONFIG.technicalLabel}</span>
        </div>
        <div>
          <span aria-hidden="true">•</span>
          <span>{PORTAL_CONFIG.statusLabel}</span>
        </div>
      </header>

      {/* Main Identity & Tagline */}
      <div>
        <h1>{PORTAL_CONFIG.name}</h1>
        <p>&ldquo;{PORTAL_CONFIG.tagline}&rdquo;</p>
      </div>

      {/* Destination Gateways */}
      <DestinationLinks />
    </section>
  );
};
