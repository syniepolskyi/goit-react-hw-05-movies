import { lazy, useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';
import LoaderComponent from './components/Loader';
import { ToastContainer } from 'react-toastify';
import { addBackToTop } from 'vanilla-back-to-top';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "HomePage" */),
);

const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /* webpackChunkName: "Movie-details-page"*/
  ),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "Not-found-view"*/),
);
const Cast = lazy(() => import('./views/Cast' /* webpackChunkName: "cast"*/));
const Reviews = lazy(() =>
  import('./views/Reviews' /* webpackChunkName: "reviews"*/),
);

export default function App() {
  useEffect(() => {
    addBackToTop({
      backgroundColor: '#EC625Fcb',
      innerHTML:
        '<svg viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>',
      textColor: '#fff',
    });
  }, []);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<LoaderComponent />}>
        <Routes>
          <Route
            path="/goit-react-hw-05-movies/"
            element={<HomePage />}
            exact
          />
          <Route
            path="/goit-react-hw-05-movies/movies"
            element={<MoviesPage />}
            exact
          />
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId"
            element={<MovieDetailsPage />}
          >
            <Route path={`cast`} element={<Cast />} />
            <Route path={`reviews`} element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>

      <ToastContainer />
    </Container>
  );
}
