
import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import heroImage from 'assets/illustrations/Header.png';
import { greeting, greetingDescription, linkedinUrl, githubUrl, cvLink } from 'data/config';
import linkedinLogo from 'assets/illustrations/linkedin_logo.png';
import githubLogo from 'assets/illustrations/github_logo.png';
import linkedinLogoWhite from 'assets/illustrations/linkedin_white.png';
import githubLogoWhite from 'assets/illustrations/github_white.png';

import { IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Header />

      <Details theme={theme}>
      <div class="name">
        <svg id="logo" width="861" height="133" viewBox="0 0 861 133" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0.648438" y="0.664062" width="860" height="132" fill="black">
        <rect fill="white" x="0.648438" y="0.664062" width="860" height="132"/>
        <path d="M49.3828 124H5.64844V11.7109H49.3828V124Z"/>
        <path d="M66.5391 55.7266C71.7422 55.7266 75.4219 53.3125 77.5781 48.4844C78.4688 46.3281 79.0078 43.8906 79.1953 41.1719H66.5391V11.5703H109.289V39.9062C109.289 56.5 101.461 67.0469 85.8047 71.5469C80.4141 73.0938 73.9922 73.8672 66.5391 73.8672V55.7266Z"/>
        <path d="M216.516 48.5547C224.484 38.3828 234.609 33.2969 246.891 33.2969C250.266 33.2969 253.734 34 257.297 35.4062C260.906 36.8125 264.047 38.8516 266.719 41.5234C272.531 47.3359 275.438 54.9531 275.438 64.375V124H234.656V78.9297C234.656 73.1641 233.742 68.6406 231.914 65.3594C230.086 62.0312 227.906 60.3672 225.375 60.3672C222.891 60.3203 221.25 61.9375 220.453 65.2188C220.219 66.1562 220.102 67.2109 220.102 68.3828V124H180.234V78.9297C180.234 73.1641 179.227 68.6406 177.211 65.3594C175.242 62.0312 173.086 60.3672 170.742 60.3672C166.992 60.3672 165.117 63.3906 165.117 69.4375V124H123.352V36.6016H146.414L156.469 50.2422C159.891 45.0859 164.766 40.9844 171.094 37.9375C177.469 34.8438 183.961 33.2969 190.57 33.2969C199.148 33.2969 206.25 36.2031 211.875 42.0156C213.703 43.8906 215.25 46.0703 216.516 48.5547Z"/>
        <path d="M399.117 47.2188C399.117 40.6094 396.656 37.3047 391.734 37.3047C389.625 37.3047 386.695 38.0781 382.945 39.625L373.594 43.4922V70.9844C390.609 64.6562 399.117 56.7344 399.117 47.2188ZM440.883 48.4141C440.883 63.4141 433.477 75.3203 418.664 84.1328L449.18 124H393.633L373.875 91.4453V124H327.961V11.7109C357.68 9.60156 377.156 8.54688 386.391 8.54688C395.625 8.54688 402.656 9.10938 407.484 10.2344C420.797 13.2812 430.312 19.7969 436.031 29.7812C439.219 35.5 440.836 41.7109 440.883 48.4141Z"/>
        <path d="M466.055 116.266C462.305 112.75 459.305 108.344 457.055 103.047C454.852 97.7031 453.75 91.9609 453.75 85.8203C453.75 79.6797 454.359 74.3594 455.578 69.8594C458.016 60.9062 462.281 53.3828 468.375 47.2891C471.281 44.2891 474.516 41.7578 478.078 39.6953C485.391 35.4297 493.102 33.2969 501.211 33.2969C509.367 33.2969 516.516 35.9922 522.656 41.3828C524.625 43.1172 526.336 45.1094 527.789 47.3594L537.844 36.6016H560.906V124H537.844L527.789 109.445C520.102 120.789 508.453 126.484 492.844 126.531C488.531 126.578 483.914 125.734 478.992 124C474.117 122.312 469.805 119.734 466.055 116.266ZM523.008 63.1094C521.32 62.125 519.305 61.6328 516.961 61.6328C514.617 61.6328 512.133 62.4766 509.508 64.1641C506.93 65.8047 504.609 67.8906 502.547 70.4219C497.953 76.0938 495.656 81.8594 495.656 87.7188C495.656 91.8438 496.922 94.75 499.453 96.4375C501.797 97.9844 505.359 97.7734 510.141 95.8047C514.969 93.7891 519.258 91.1875 523.008 88V63.1094Z"/>
        <path d="M619.477 45.9531C625.805 37.5156 635.391 33.2969 648.234 33.2969C651.891 33.2969 655.781 34.1406 659.906 35.8281C664.031 37.5156 667.617 39.9531 670.664 43.1406C677.227 49.9375 680.508 58.9375 680.508 70.1406V124H638.461V86.1016C638.461 78.5547 637.242 72.3672 634.805 67.5391C632.367 62.6641 629.508 60.2266 626.227 60.2266C621.727 60.2266 619.477 63.2969 619.477 69.4375V124H577.711V5.66406H619.477V45.9531Z"/>
        <path d="M738.445 77.3125C738.445 92.6875 742.172 100.375 749.625 100.375C753.375 100.375 755.555 98.5469 756.164 94.8906C756.352 93.7656 756.445 92.5234 756.445 91.1641V36.6016H798.211V124H775.148L765.094 110.289C759.141 118.398 750.539 123.672 739.289 126.109C725.508 129.062 714.398 126.719 705.961 119.078C699.586 113.312 696.398 105.695 696.398 96.2266V36.6016H738.445V77.3125Z"/>
        <path d="M855.094 124H815.227V5.66406H855.094V124Z"/>
        </mask>
        <path d="M49.3828 124H5.64844V11.7109H49.3828V124Z" stroke="#66BFBF" stroke-width="10" mask="url(#path-1-outside-1)"/>
        <path d="M66.5391 55.7266C71.7422 55.7266 75.4219 53.3125 77.5781 48.4844C78.4688 46.3281 79.0078 43.8906 79.1953 41.1719H66.5391V11.5703H109.289V39.9062C109.289 56.5 101.461 67.0469 85.8047 71.5469C80.4141 73.0938 73.9922 73.8672 66.5391 73.8672V55.7266Z" stroke="#66BFBF" stroke-width="10" mask="url(#path-1-outside-1)"/>
        <path d="M216.516 48.5547C224.484 38.3828 234.609 33.2969 246.891 33.2969C250.266 33.2969 253.734 34 257.297 35.4062C260.906 36.8125 264.047 38.8516 266.719 41.5234C272.531 47.3359 275.438 54.9531 275.438 64.375V124H234.656V78.9297C234.656 73.1641 233.742 68.6406 231.914 65.3594C230.086 62.0312 227.906 60.3672 225.375 60.3672C222.891 60.3203 221.25 61.9375 220.453 65.2188C220.219 66.1562 220.102 67.2109 220.102 68.3828V124H180.234V78.9297C180.234 73.1641 179.227 68.6406 177.211 65.3594C175.242 62.0312 173.086 60.3672 170.742 60.3672C166.992 60.3672 165.117 63.3906 165.117 69.4375V124H123.352V36.6016H146.414L156.469 50.2422C159.891 45.0859 164.766 40.9844 171.094 37.9375C177.469 34.8438 183.961 33.2969 190.57 33.2969C199.148 33.2969 206.25 36.2031 211.875 42.0156C213.703 43.8906 215.25 46.0703 216.516 48.5547Z" stroke="#66BFBF" stroke-width="10" mask="url(#path-1-outside-1)"/>
        <path d="M399.117 47.2188C399.117 40.6094 396.656 37.3047 391.734 37.3047C389.625 37.3047 386.695 38.0781 382.945 39.625L373.594 43.4922V70.9844C390.609 64.6562 399.117 56.7344 399.117 47.2188ZM440.883 48.4141C440.883 63.4141 433.477 75.3203 418.664 84.1328L449.18 124H393.633L373.875 91.4453V124H327.961V11.7109C357.68 9.60156 377.156 8.54688 386.391 8.54688C395.625 8.54688 402.656 9.10938 407.484 10.2344C420.797 13.2812 430.312 19.7969 436.031 29.7812C439.219 35.5 440.836 41.7109 440.883 48.4141Z" stroke="#66BFBF" stroke-width="10"/>
        <path d="M466.055 116.266C462.305 112.75 459.305 108.344 457.055 103.047C454.852 97.7031 453.75 91.9609 453.75 85.8203C453.75 79.6797 454.359 74.3594 455.578 69.8594C458.016 60.9062 462.281 53.3828 468.375 47.2891C471.281 44.2891 474.516 41.7578 478.078 39.6953C485.391 35.4297 493.102 33.2969 501.211 33.2969C509.367 33.2969 516.516 35.9922 522.656 41.3828C524.625 43.1172 526.336 45.1094 527.789 47.3594L537.844 36.6016H560.906V124H537.844L527.789 109.445C520.102 120.789 508.453 126.484 492.844 126.531C488.531 126.578 483.914 125.734 478.992 124C474.117 122.312 469.805 119.734 466.055 116.266ZM523.008 63.1094C521.32 62.125 519.305 61.6328 516.961 61.6328C514.617 61.6328 512.133 62.4766 509.508 64.1641C506.93 65.8047 504.609 67.8906 502.547 70.4219C497.953 76.0938 495.656 81.8594 495.656 87.7188C495.656 91.8438 496.922 94.75 499.453 96.4375C501.797 97.9844 505.359 97.7734 510.141 95.8047C514.969 93.7891 519.258 91.1875 523.008 88V63.1094Z" stroke="#66BFBF" stroke-width="10" mask="url(#path-1-outside-1)"/>
        <path d="M619.477 45.9531C625.805 37.5156 635.391 33.2969 648.234 33.2969C651.891 33.2969 655.781 34.1406 659.906 35.8281C664.031 37.5156 667.617 39.9531 670.664 43.1406C677.227 49.9375 680.508 58.9375 680.508 70.1406V124H638.461V86.1016C638.461 78.5547 637.242 72.3672 634.805 67.5391C632.367 62.6641 629.508 60.2266 626.227 60.2266C621.727 60.2266 619.477 63.2969 619.477 69.4375V124H577.711V5.66406H619.477V45.9531Z" stroke="#66BFBF" stroke-width="10" mask="url(#path-1-outside-1)"/>
        <path d="M738.445 77.3125C738.445 92.6875 742.172 100.375 749.625 100.375C753.375 100.375 755.555 98.5469 756.164 94.8906C756.352 93.7656 756.445 92.5234 756.445 91.1641V36.6016H798.211V124H775.148L765.094 110.289C759.141 118.398 750.539 123.672 739.289 126.109C725.508 129.062 714.398 126.719 705.961 119.078C699.586 113.312 696.398 105.695 696.398 96.2266V36.6016H738.445V77.3125Z" stroke="#66BFBF" stroke-width="5" />
        <path d="M855.094 124H815.227V5.66406H855.094V124Z" stroke="#66BFBF" stroke-width="10" mask="url(#path-1-outside-1)"/>
        </svg>
      </div>
      </Details>
        
      <IntroWrapper as={Container}>
        <Details theme={theme}>
        
        <div class="intro-container">
          <h1>{greeting} <span class="wave">👋</span></h1>
          <h4>{greetingDescription}</h4>
        </div>
          <div>
            <Button as={AnchorLink} href="#contact" className="hire-me">
              Hire me
            </Button>{' '}
            <a href={cvLink} target="_blank" rel="noreferrer">
              <Button className="view-cv">View CV</Button>
            </a>
          </div>
          <div className="social">
            {' '}
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
              <img width="45" src={theme === 'light' ? linkedinLogo : linkedinLogoWhite} alt="Linkedin" />
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <img width="45" src={theme === 'light' ? githubLogo : githubLogoWhite} alt="GitHub" />
            </a>
          </div>
        </Details>
        <Thumbnail>
          <img src={heroImage} alt="Crio.Do" />
        </Thumbnail>
      </IntroWrapper>
    </div>
  );
};
