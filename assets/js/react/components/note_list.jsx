import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NoteItem from './noteItem.jsx';
import { useMutation, gql } from '@apollo/client';

const DELETE_NOTE = gql`
  mutation DeleteNote($id: ID!) {
    deleteNote(id: $id,) {
      id
    }
  }
`;

const NoteList = ({notes}) => {
  const [updateError, setError] = useState(false);
  const history = useHistory();
  const [deleteNote] = useMutation(DELETE_NOTE, {
    update(cache, {data: {deleteNote}}) {
      cache.modify({
        fields: {
          notes(existingNotes = []) {
            return existingNotes.filter(existingNote => existingNote.__ref !== `Note:${deleteNote.id}`)
          }
        }
      });
    }
  });

  const handleEdit = (note) => {
    history.push(`/edit/${note.id}`);
  }

  const handleDelete = async(note) => {
    try {
      await deleteNote({ variables: { id: note.id }});
      history.push('');
    } catch (e) {
      console.log(e);
      setError(true);
      // add component, like a modal, or some kind of message, to show delete errors.
    }
  }

  const noteItems = notes.map(note => <NoteItem key={note.id} note={note} handleEdit={handleEdit} handleDelete={handleDelete} />)

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {noteItems}
      </ul>
    </div>
  )
}

export default NoteList;
