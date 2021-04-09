defmodule NotetakerWeb.NotesController do
  use NotetakerWeb, :controller

  def embed_react(conn, _params) do
    render(conn, "react.html")
  end
end
