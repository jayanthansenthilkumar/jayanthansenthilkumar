import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from '@/layouts/RootLayout';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/AboutPage';
import ProjectsPage from '@/pages/ProjectsPage';
import ProjectOverviewPage from '@/pages/ProjectOverviewPage';
import ContactPage from '@/pages/ContactPage';
import SkillsPage from '@/pages/SkillsPage';
import OpenSourcePage from '@/pages/OpenSourcePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectOverviewPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="open-source" element={<OpenSourcePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
