import { Route, Routes } from 'react-router-dom';
import './App.css';
import InstrumentPanel from './pages/InstrumentPanel/InstrumentPanel';
import NotFoundPage from './pages/NotFoundPage';
import SettingsPage from './pages/Settings/Settings';
import { NoteContextProvider } from './context/NoteContextProvider';
import PageLayout from './components/PageLayout';

export const ROOT_PATH = '/web-instrument/';

export default function App() {
  // TODO: limit saving to just the option components that have been changed, rather than all

  return (
    <NoteContextProvider>
      <Routes>
        <Route path={ROOT_PATH} element={<PageLayout />}>
            <Route index element={<InstrumentPanel />} />
            <Route path='settings' element={<SettingsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </NoteContextProvider>
  );
}
