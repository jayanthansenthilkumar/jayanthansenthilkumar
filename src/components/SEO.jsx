import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = 'Jayanthan Senthilkumar | Portfolio',
    description = 'Portfolio of Jayanthan Senthilkumar, a Developer and Quick Learner specializing in Web Development.',
    keywords = 'Jayanthan Senthilkumar, Portfolio, Developer, Web Development, React, JavaScript',
    author = 'Jayanthan Senthilkumar',
    url = 'https://itsjayanthan.me/',
    image = 'https://itsjayanthan.me/og-image.jpg',
    type = 'website'
}) => {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />

            {/* Canonical URL */}
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
