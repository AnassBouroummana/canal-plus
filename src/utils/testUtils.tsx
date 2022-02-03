import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import ConnectedIntlProvider from 'providers/ConnectedIntlProvider';
import theme from 'stylesheet';

export const AllTheProviders: React.FC<{}> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={createBrowserHistory()}>
        <ConnectedIntlProvider>{children}</ConnectedIntlProvider>
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

const testSnapshot = (comp: React.ReactElement) => {
  const { container } = customRender(comp);
  expect(container).toMatchSnapshot();
};

export * from '@testing-library/react';
export { customRender as render, testSnapshot };
