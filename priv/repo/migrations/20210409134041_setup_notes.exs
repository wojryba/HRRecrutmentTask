defmodule Notetaker.Repo.Migrations.SetupNotes do
  use Ecto.Migration

  def change do
    create table("note") do
      add :title, :string
      add :body, :text
      timestamps()
    end
  end
end
