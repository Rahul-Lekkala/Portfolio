import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Footer } from 'components/theme';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { name } from 'data/config';
import { Global } from './styles';

import './fonts.css';

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [url, setUrl] = useState('');
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <>
      <GatsbySeo
        title={`${name} | Portfolio`}
        description="Rahul Lekkala is a Software Engineer currently working at EA Games Pvt. Ltd. and is enthusiastic in developing web sites. This is his portfolio"
        canonical={url}
        openGraph={{
          type: 'website',
          title: `${name} | Portfolio`,
          site_name: `${name} | Portfolio`,
          locale: 'en_IN',
          url,
          description:
            "Rahul Lekkala is a Software Engineer currently working at EA Games Pvt. Ltd. and is enthusiastic in developing web sites. This is his portfolio",
          images: [
            {
              url: 'https://media-exp1.licdn.com/dms/image/C5603AQHiRGd0M0ESXw/profile-displayphoto-shrink_200_200/0/1610988550457?e=1616630400&v=beta&t=uhsnzOA2jUaVy1o6r98zA28JUWw7w4f7BfR57JNeSuQ',
              width: 829,
              height: 829,
              alt: 'Rahul',
            },
          ],
        }}
        twitter={{
          handle: '@crio_do',
          site: '@crio_do',
          cardType: 'summary_large_image',
        }}
      />
      <Global theme={theme} />
      {children}
      <Footer />
    </>
  );
};
