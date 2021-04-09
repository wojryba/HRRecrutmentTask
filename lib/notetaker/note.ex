defmodule Notetaker.Note do
  use Ecto.Schema

  schema "note" do
    field :title, :string
    field :body, :string
    timestamps()
  end
end
