import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router';
import { PATHS } from 'routes';
import { StyledTitle } from './NavBar.style';

const NavBar: React.FC = () => {
  const history = useHistory();
  return (
    <StyledTitle onClick={() => history.push(PATHS.HOME)}>
      <FormattedMessage id="home.welcome" />
    </StyledTitle>
  );
};

export default NavBar;
