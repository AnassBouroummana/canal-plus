import { render } from 'utils/testUtils';

import Footer from '../Footer';

/*
Snapshot tests allow you to easily lock the comportment of a component.
Given props, it renders the component and compares it to the saved snapshot.
*/
describe('[Snapshot] <Footer />', () => {
  it('should render a button with a label', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
