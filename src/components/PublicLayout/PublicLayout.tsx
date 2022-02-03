import React, { ReactNode } from 'react';
import Footer from 'components/Footer';

import { PageContent, PublicLayoutContainer } from './PublicLayout.style';
import NavBar from 'components/NavBar';

interface Props {
  children: ReactNode;
}

const PublicLayout: React.FC<Props> = ({ children }) => {
  return (
    <PublicLayoutContainer>
      <NavBar />
      <PageContent>{children}</PageContent>
      <Footer />
    </PublicLayoutContainer>
  );
};

export default PublicLayout;
