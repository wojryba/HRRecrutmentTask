import React, { useState } from "react";
import NormalButton from "./normal_button.jsx";
import { useHistory } from "react-router-dom";

const NoteForm = ({buttonText, handleSubmit, initialTitle = '', initialBody = ''}) => {
    const history = useHistory();
    const [title, setTitle] = useState(initialTitle);
    const [body, setBody] = useState(initialBody);

    const handleButtonClick = () => {
        handleSubmit(title, body);
    }

    return (
      <div className="w-full">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                      Title
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         id="title" type="text" placeholder="Title" value={title} onChange={event => setTitle(event.target.value)} />
              </div>

              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="noteBody">
                      Note body
                  </label>
                  <textarea className="shadow appearance-none border rounded w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="noteBody" type="text" placeholder="Note Body" value={body} onChange={event => setBody(event.target.value)} />
              </div>

              <NormalButton text="Back" type="button" handleClick={() => history.goBack()} />
              <NormalButton text={buttonText} type="button" handleClick={handleButtonClick} />
          </form>
      </div>
    )
}

export default NoteForm;
