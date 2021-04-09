defmodule Notetaker.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      Notetaker.Repo,
      # Start the Telemetry supervisor
      NotetakerWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: Notetaker.PubSub},
      # Start the Endpoint (http/https)
      NotetakerWeb.Endpoint
      # Start a worker by calling: Notetaker.Worker.start_link(arg)
      # {Notetaker.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Notetaker.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    NotetakerWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
