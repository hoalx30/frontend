import { useContext } from 'react';
import { NoteContext } from '../context';

const useNoteContext = () => useContext(NoteContext);

export default useNoteContext;
