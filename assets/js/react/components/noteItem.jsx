import React from "react";
import NormalButton from './normal_button.jsx';

const NoteItem = ({note, handleEdit, handleDelete}) => {
  return (
    <li>
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-indigo-600 truncate">
            {note.title}
          </p>
        </div>
        <div className="mt-2">
          <p>{note.body}</p>
        </div>
        <div className="mt-2 sm:flex sm:justify-between">
          <div className="sm:flex">
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
            <svg className="flex-shrink-0 mt-4 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <p>
              <time className="mr-1" dateTime={note.insertedAt}>{new Date(Date.parse(note.insertedAt)).toLocaleString()}</time>
              <NormalButton handleClick={() => handleEdit(note)} text="Edit" type="button" />
              <NormalButton handleClick={() => handleDelete(note)} text="Delete" type="button" />
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default NoteItem;
