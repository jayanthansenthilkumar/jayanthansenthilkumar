import { FC } from "react";
import { ArrowUp } from "lucide-react";
import { PORTAL_CONFIG } from "@/config/links";
import { GithubIcon, LinkedinIcon, MediumIcon, MailIcon } from "@/components/ui/icons";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (name: string) => {
    switch (name.toUpperCase()) {
      case "GITHUB":
        return <GithubIcon aria-hidden="true" />;
      case "LINKEDIN":
        return <LinkedinIcon aria-hidden="true" />;
      case "MEDIUM":
        return <MediumIcon aria-hidden="true" />;
      case "EMAIL":
        return <MailIcon aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <footer>
      <div>
        {/* Copyright & Statement */}
        <div>
          <span>&copy; {currentYear} Jayanthan Senthilkumar.</span>
          <span>Designed &amp; Developed with Purpose.</span>
        </div>

        {/* Social Links & Back-to-Top Action */}
        <div>
          <nav aria-label="Social links">
            {PORTAL_CONFIG.social.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                {getSocialIcon(s.name)}
                <span>{s.name}</span>
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
          >
            <span>Top</span>
            <ArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
