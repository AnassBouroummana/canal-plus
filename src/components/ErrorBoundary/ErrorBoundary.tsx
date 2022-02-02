import React, { ReactNode } from 'react';

import { IFallbackProps } from 'components/AppCrashFallback/AppCrashFallback';

interface Props {
  children: ReactNode;
  FallbackComponent: React.ComponentType<IFallbackProps>;
}
interface State {
  hasError: boolean;
  eventId: string;
}

interface DerivedState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  static getDerivedStateFromError(): DerivedState {
    return { hasError: true };
  }

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, eventId: '' };
  }

  render() {
    const { hasError, eventId } = this.state;
    const { FallbackComponent, children } = this.props;
    return hasError ? <FallbackComponent eventId={eventId} /> : children;
  }
}

export default ErrorBoundary;
