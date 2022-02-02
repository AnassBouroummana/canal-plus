import { render } from 'utils/testUtils';
import MediaCard from '../MediaCard';

const media = {
  id: 1,
  backdrop_path: '/zGqBpfck5wVzS2iy6EsENMZw5kP.jpg',
  name: 'Walking the Americas',
  overview:
    'Explorer Levison Wood sets out to trek 1800 miles from Mexico to Colombia, through fascinating, beautiful and diverse regions, and meets people living everywhere from violent cities to deep jungle.',
  poster_path: '/6NUjtmU99inCbQ6TkwoTDSQuzIU.jpg',
};
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
