import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Join, Leaderboard, Quiz, Root } from './components';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} />
      <Route path="/join" element={<Join />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/quiz" element={<Quiz />} />
    </>,
  ),
);
