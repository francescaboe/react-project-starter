import React from 'react';
import { useTranslation } from 'react-i18next';
function App() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-3xl">Hello React without cra</h1>
      <h1 className="text-3xl font-bold underline">Hello Tailwind!</h1>
      <a className="text-2xl" href="https://reactjs.org">
        welcome to react
      </a>
      <h1>{t('hello_world')}</h1>
    </div>
  );
}

export default App;
