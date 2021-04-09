defmodule NotetakerWeb.Schema do
  use Absinthe.Schema
  import_types(Absinthe.Type.Custom)
  alias Notetaker.{Note, Repo}

  query do
    field :notes, list_of(:note) do
      resolve(fn _, _ ->
        notes = Repo.all(Note)
        {:ok, notes}
      end)
    end
  end

  object :note do
    field :id, :id
    field :title, :string
    field :body, :string
    field :inserted_at, :naive_datetime
  end
end
