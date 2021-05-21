import React, {useState} from "react";
import NoteForm from '../components/note_form.jsx';
import FormHeader from '../components/form_header.jsx';
import { useHistory, useParams } from "react-router-dom";
import { useQuery, useMutation, gql } from '@apollo/client';

const GET_NOTE_DETAILS = gql`
  query NoteDetails($noteId: ID!) {
    note(id: $noteId) {
      id
      title
      body
      insertedAt
    }
  }`;

const UPDATE_NOTE = gql`
  mutation UpdateNote($id: ID!, $title: String!, $body: String!) {
    updateNote(id: $id, title: $title, body: $body) {
      id
      title
      body
    }
  }
`;

const EditForm = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_NOTE_DETAILS, { variables: { noteId: id}});
  const [updateNote] = useMutation(UPDATE_NOTE);
  const [updateError, setError] = useState(false);
  const history = useHistory();

  const handleEdit = async (title, body) => {
    try {
      await updateNote({ variables: { id: data.note.id, title, body}});
      history.push('');
    } catch (e) {
      console.log(e);
      setError(true);
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error || updateError) return <p>Error!</p>;

  return (
    <>
      <FormHeader text="Edit note" />

      <NoteForm
        buttonText="Save"
        handleSubmit={handleEdit}
        initialTitle={data.note.title}
        initialBody={data.note.body}
      />

    </>
  )
}

export default EditForm;
