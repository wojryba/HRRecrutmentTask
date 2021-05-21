defmodule NotetakerWeb.Schema do
  use Absinthe.Schema
  import_types(Absinthe.Type.Custom)
  alias Notetaker.{Note, Repo, Resolvers}

  query do
    field :notes, list_of(:note) do
      resolve(fn _, _ ->
        notes = Repo.all(Note)
        {:ok, notes}
      end)
    end

    field :note, :note do
      arg :id, :id

      resolve &Resolvers.get_note/3
    end
  end

  object :note do
    field :id, :id
    field :title, :string
    field :body, :string
    field :inserted_at, :naive_datetime
  end

  mutation do
    @desc "Create a note"
    field :create_note, type: :note do
      arg :title, :string
      arg :body, :string

      resolve &Resolvers.create_note/3
    end

    @desc "Update a note"
    field :update_note, type: :note do
      arg :id, :id
      arg :title, :string
      arg :body, :string

      resolve &Resolvers.update_note/3
    end

    @desc "Delete a note"
    field :delete_note, type: :note do
      arg :id, :id

      resolve &Resolvers.delete_node/3
    end
  end

end
