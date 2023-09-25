# frozen_string_literal: true

Decidim.configure do |config|
  config.application_name = "Participa Energética coop."
  config.mailer_sender = "participa@energetica.coop"

  # Change these lines to set your preferred locales
  config.default_locale = :es
  config.available_locales = [:es]

  config.enable_html_header_snippets = true
end

Rails.application.config.i18n.available_locales = Decidim.available_locales
Rails.application.config.i18n.default_locale = Decidim.default_locale
