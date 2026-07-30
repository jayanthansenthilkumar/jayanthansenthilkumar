import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from '@/layouts/RootLayout';
import HomePage from '@/pages/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}
