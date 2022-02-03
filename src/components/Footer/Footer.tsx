import React from 'react';
import { FormattedMessage } from 'react-intl';
import { StyledFooter } from './Footer.style';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FormattedMessage id="footer.built-by" />
    </StyledFooter>
  );
};

export default Footer;
