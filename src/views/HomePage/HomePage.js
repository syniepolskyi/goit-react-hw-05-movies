import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import apiService from '../../services/apiService';
import { Pagination } from '@material-ui/lab';
import useStyles from '../../services/stylesPagination';
import Status from '../../services/status';
import LoaderComponent from '../../components/Loader';
import ErrorComponent from '../../components/Error';
import noPhoto from '../../img/no_image.jpg';
import styles from './HomePage.module.css';

export default function HomePage() {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [totalPage, setTotalPage] = useState(0);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const page = new URLSearchParams(location.search).get('page') ?? 1;

  useEffect(() => {
    setStatus(Status.PENDING);
    apiService
      .getPopularMovies(page)
      .then(({ results, total_pages }) => {
        setMovies(results);
        setTotalPage(total_pages);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError('Something went wrong. Please try again.');
        setStatus(Status.REJECTED);
      });
  }, [page]);

  const onHandlePage = (event, page) => {
    navigate({ ...location, search: `page=${page}` });
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Trending today</h1>

      {status === Status.PENDING && <LoaderComponent />}

      {status === Status.REJECTED && <ErrorComponent message={error.message} textError="Error" />}

      {status === Status.RESOLVED && (
        <>
          <ul className={styles.moviesList}>
            {movies.map(movie => (
              <li key={movie.id} className={styles.moviesItem}>
                <Link
                  to={`/goit-react-hw-05-movies/movies/${movie.id}`}
                  className={styles.link}
                  state={{ getBack: {...location} }}
                >
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : noPhoto
                    }
                    alt={movie.title}
                    className={styles.poster}
                  />
                  <span className={styles.movieTitle}>{movie.title}</span>
                </Link>
                
              </li>
            ))}
          </ul>
          {totalPage > 1 && (
            <Pagination
              className={classes.root}
              count={totalPage}
              onChange={onHandlePage}
              page={Number(page)}
              showFirstButton
              showLastButton
              size="large"
            />
          )}
        </>
      )}
    </main>
  );
}
