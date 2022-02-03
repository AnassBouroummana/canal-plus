import { render } from 'utils/testUtils';
import { media } from '__fixtures__/state';
import MediaCard from '../MediaCard';
describe('MediaCard', () => {
  it('test if has title and overview ', () => {
    const { getByText } = render(<MediaCard media={media} />);
    const title = getByText(media.name);
    const overview = getByText(media.overview);
    expect(title).toBeInTheDocument();
    expect(overview).toBeInTheDocument();
  });
  it('MediaCard:: must match the snapshot', () => {
    const { container } = render(<MediaCard media={media} />);
    expect(container).toMatchSnapshot();
  });
});
