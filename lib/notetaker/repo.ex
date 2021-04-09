defmodule Notetaker.Repo do
  use Ecto.Repo,
    otp_app: :notetaker,
    adapter: Ecto.Adapters.Postgres
end
