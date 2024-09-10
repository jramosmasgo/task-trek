import { useState } from 'react';
import '@/styles/main.scss';
import UserTemplate from './layouts/UserTemplate';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <UserTemplate />
    </div>
  )
}

export default App
