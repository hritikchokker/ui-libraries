import MovieList from './FakeMovieList';
import styles from './react-slider.module.scss';

export function ReactSlider({list}) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactSlider! library</h1>
      <MovieList list={list} />
    </div>
  );
}

export default ReactSlider;
