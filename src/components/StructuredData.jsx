import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Vignesh R",
        "url": "https://vigneshr.me",
        "jobTitle": "Developer",
        "description": "Developer and Quick Learner specializing in Web Development",
        "sameAs": [
            "https://github.com/Unknowns-007",
            "https://linkedin.com/in/vignesh-r"
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Vignesh R Portfolio",
        "url": "https://vigneshr.me",
        "description": "Portfolio of Vignesh R, a Developer and Quick Learner specializing in Web Development",
        "author": {
            "@type": "Person",
            "name": "Vignesh R"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://vigneshr.me/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://vigneshr.me/#about"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Projects",
                "item": "https://vigneshr.me/#projects"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Experience",
                "item": "https://vigneshr.me/#experience"
            },
            {
                "@type": "ListItem",
                "position": 5,
                "name": "Contact",
                "item": "https://vigneshr.me/#contact"
            }
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(personSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>
        </Helmet>
    );
};

export default StructuredData;
