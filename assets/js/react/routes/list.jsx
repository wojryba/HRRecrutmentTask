import React from "react";
import { useQuery, gql } from '@apollo/client';
import { useHistory } from "react-router-dom";
import NormalButton from '../components/normal_button.jsx';
import NoteList from "../components/note_list.jsx";

const LIST_NOTES = gql`
query {
  notes {
    title,
    body,
    id,
    insertedAt
  }
}
`;

const List = () => {
  const { loading, error, data } = useQuery(LIST_NOTES);
  const history = useHistory();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  // the <> ... </> are shorthand for <Fragment>
  return (
  <>
    <header>
      <div className="max-w-7xl mx-auto mb-4">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Notes
        </h1>
      </div>
    </header>

    <NoteList notes={data.notes} />

    <NormalButton text="Create New" type="button" showIcon handleClick={() => history.push('/create')} />
  </>
)
}

export default List;
