import { Route, Routes } from 'react-router-dom';
import './App.css';
import InstrumentPanel from './pages/InstrumentPanel/InstrumentPanel';
import NotFoundPage from './pages/NotFoundPage';
import SettingsPage from './pages/Settings/Settings';
import PageLayout from './components/PageLayout';
import { NoteContextProvider } from './context/NoteContextProvider';

export const ROOT_PATH = '/web-instrument/';

export default function App() {

  return (
    <NoteContextProvider>
      <Routes>
        <Route path={ROOT_PATH}> {/* element={<PageLayout />} */}
            <Route index element={<InstrumentPanel />} />
            <Route path='settings' element={<SettingsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </NoteContextProvider>
  );
}
