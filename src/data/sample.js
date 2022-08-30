import {nanoid} from 'nanoid';

const getSampleData = () => {
  return [
    {
      id: nanoid(5),
      title: 'Sample Note',
      body: 'This is a sample note. You can try to archive and delete this note. Click the plus button to add a new note. All notes are stored in the indexed database from your browser, so make sure you use the same browser as the previous session to see the notes you have added.',
      createdAt: new Date(),
      archived: false,
    },
  ];
};

const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('en-GB', options);
};

export {getSampleData, showFormattedDate};
