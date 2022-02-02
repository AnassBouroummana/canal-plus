import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { Router } from 'react-router';
import flattenMessages from 'services/i18n/intl';
import enMessages from 'translations/en.json';
import frMessages from 'translations/fr.json';
import { createBrowserHistory } from 'history';

const theme = {
  breakpoints: {
    xs: '0px',
    sm: '577px',
    md: '769px',
    lg: '1025px',
  },
  fontFamily: {
    main: 'Roboto',
  },
};
const locales = {
  fr: flattenMessages(frMessages),
  en: flattenMessages(enMessages),
};

export const AllTheProviders: React.FC<{}> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={createBrowserHistory()}>
        <IntlProvider
          messages={{
            'home.welcome': 'welcome',
          }}
          locale="en"
        >
          <IntlProvider locale="fr" messages={locales.en}>
            {children}
          </IntlProvider>
        </IntlProvider>
      </Router>
    </ThemeProvider>
  );
};

const customRender = (
  ui: Parameters<typeof render>[0],
  options?: Parameters<typeof render>[1],
) => ({
  ...render(ui, { ...options, wrapper: AllTheProviders }),
  history: createBrowserHistory(),
});

//https://github.com/mui-org/material-ui/issues/21293#issuecomment-850914765
//resolve probleme of the random id and name of the inputs
// jest.mock('@material-ui/core/utils/unstable_useId', () =>
//   jest.fn().mockReturnValue('mui-test-id'),
// );

const testSnapshot = (comp: React.ReactElement) => {
  const { container } = customRender(comp);
  expect(container).toMatchSnapshot();
};

export * from '@testing-library/react';
export { customRender as render, testSnapshot };
