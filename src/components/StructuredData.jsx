import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Jayanthan Senthilkumar",
        "url": "https://itsjayanthan.me",
        "jobTitle": "Developer",
        "description": "Developer and Quick Learner specializing in Web Development",
        "sameAs": [
            "https://github.com/jayanthansenthilkumar",
            "https://linkedin.com/in/jayanthan18"
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Jayanthan Senthilkumar Portfolio",
        "url": "https://itsjayanthan.me",
        "description": "Portfolio of Jayanthan Senthilkumar, a Developer and Quick Learner specializing in Web Development",
        "author": {
            "@type": "Person",
            "name": "Jayanthan Senthilkumar"
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
                "item": "https://itsjayanthan.me/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://itsjayanthan.me/#about"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Projects",
                "item": "https://itsjayanthan.me/#projects"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Experience",
                "item": "https://itsjayanthan.me/#experience"
            },
            {
                "@type": "ListItem",
                "position": 5,
                "name": "Contact",
                "item": "https://itsjayanthan.me/#contact"
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
