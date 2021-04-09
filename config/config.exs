# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :notetaker,
  ecto_repos: [Notetaker.Repo]

# Configures the endpoint
config :notetaker, NotetakerWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "B0BSrhEkq3BTN0nUIpnFPkw+gw5okbwSanQnTv8BkL/DXneCU7UF48FcyIS+tVxI",
  render_errors: [view: NotetakerWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Notetaker.PubSub,
  live_view: [signing_salt: "9C5mTxfP"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
