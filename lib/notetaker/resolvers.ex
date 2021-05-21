defmodule Notetaker.Resolvers do
  alias Notetaker.{Note, Repo}

  def create_note(_root, args, _info) do
    Repo.insert(
      %Note{ title: "#{args.title}", body: "#{args.body}" }
      )
  end

  def get_note(_root, args, _info) do
    note = Repo.get(Note, args.id)
    {:ok, note}
  end

  def update_note(_root, args, _info) do
    note = Repo.get(Note, args.id)
    note = Ecto.Changeset.change note, title: args.title
    note = Ecto.Changeset.change note, body: args.body
    note = Repo.update(note)

    note = Repo.get(Note, args.id)
    {:ok, note}
  end

  def delete_node(_root, args, _info) do
    note = Repo.get(Note, args.id)
    Repo.delete(note)
    {:ok, note}
  end
end
