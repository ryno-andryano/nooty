import React from 'react';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import {getInitialData} from '../utils/data';

function NoteApp() {
  const notes = getInitialData();

  return (
    <>
      <AppHeader />
      <AppBody notes={notes} />
    </>
  );
}

export default NoteApp;
