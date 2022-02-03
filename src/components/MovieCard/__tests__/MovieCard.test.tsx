import { render } from 'utils/testUtils';
import { movieItem } from '__fixtures__/state';
import MovieCard from '../MovieCard';
describe('MovieCard', () => {
  it('test if has title and overview ', () => {
    const { getByText } = render(<MovieCard movie={movieItem} />);
    const title = getByText(movieItem.name);
    const overview = getByText(movieItem.overview);
    expect(title).toBeInTheDocument();
    expect(overview).toBeInTheDocument();
  });
  it('MovieCard:: must match the snapshot', () => {
    const { container } = render(<MovieCard movie={movieItem} />);
    expect(container).toMatchSnapshot();
  });
});
