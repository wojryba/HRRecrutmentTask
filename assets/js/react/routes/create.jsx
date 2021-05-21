import React, { useState } from "react";

import NoteForm from '../components/note_form.jsx';
import FormHeader from '../components/form_header.jsx';
import { useHistory } from "react-router-dom";
import { gql, useMutation } from '@apollo/client';

const ADD_NOTE = gql`
  mutation CreateNote($title: String!, $body: String!) {
    createNote(title: $title, body: $body) {
      id
      title
      body
      insertedAt
    }
  }
`;



const CreateForm = () => {
  const [error, setError] = useState(false);
  const history = useHistory();

  const [addNote] = useMutation(ADD_NOTE, {
    update(cache, {data: {createNote}}) {
      cache.modify({
        fields: {
          notes(existingNotes = []) {
            const newNoteRef = cache.writeFragment({
              data: createNote,
              fragment: gql`
                fragment NewNote on Note {
                  id
                  title
                  body
                  insertedAt
                }
              `
            });
            return [...existingNotes, newNoteRef];
          }
        }
      });
    }
  });

  const handleSave = async (title, body) => {
    try {
      await addNote({ variables: { title, body}});
      history.push('');
    } catch (e) {
      console.log(e);
      setError(true);
    }
  }

  if (error) return <p>Error!</p>;

  return (
    <>
      <FormHeader text="Create new note!" />

      <NoteForm
        buttonText="Save"
        handleSubmit={handleSave}
      />

    </>
  )
}

export default CreateForm;
