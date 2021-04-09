defmodule NotetakerWeb.PageController do
  use NotetakerWeb, :controller

  def index(conn, _params) do
    redirect(conn, to: "/notes")
  end
end
