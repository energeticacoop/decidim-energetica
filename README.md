# Decidim for Energética Coop

Free Open-Source participatory democracy, citizen participation and open government for cities and organizations

This is the open-source repository for decidim-energetica, an instance of [Decidim](https://github.com/decidim/decidim) for [Energética Coop](https://www.energetica.coop/).

<img src="app/packs/images/logotipo_2x.png" alt="Energética Coop" width="50%">

## Deploying the app

This is a [Ruby on Rails](https://rubyonrails.org/) application packaged with Docker. It can be deployed into a Docker (or a Docker Swarm) environment with the usual commands:

```bash
docker-compose up -d
```

To update between commit, you can force the build:

```bash
docker-compose up -d --build
```

To enter the container and run commands, you can use (you need to have the container running):

```bash
docker-compose exec app bash
```

Once inside, you can run Rails/rake command as usual:

```bash
bin/rails db:migrate:status
```

Or enter the Rails console:

```bash
bin/rails c
```

Note that some ENV vars are dedicated to the Docker environment. Please check the [entrypoint.sh](entrypoint.sh) for details.
Mainly, you can specify if you want to run the Sidekiq worker or the Rails server with the `RUN_SIDEKIQ` ENV var. If not specified, defaults to false. Also the env `RUN_RAILS` is available to run the Rails server (defaults to true).

Finally, note that every time the container is started migrations are run. If you want to avoid this, you can use the `SKIP_MIGRATIONS` ENV var.

## Setting up the application

You will need to do some steps before having the app working properly once you've deployed it:

1. Open a Rails console in the server: `bundle exec rails console`
2. Create a System Admin user:

```ruby
user = Decidim::System::Admin.new(email: <email>, password: <password>, password_confirmation: <password>)
user.save!
```

3. Visit `<your app url>/system` and login with your system admin credentials
4. Create a new organization. Check the locales you want to use for that organization, and select a default locale.
5. Set the correct default host for the organization, otherwise the app will not work properly. Note that you need to include any subdomain you might be using.
6. Fill the rest of the form and submit it.

You're good to go!

## Upgrading Decidim

Usually upgrading Decidim just involves updating the [Gemfile](Gemfile) and running some commands. These actions must be performed in a local, development environment.

Also note that is important to create database backups before any major upgrade is performed.

Steps to upgrade:

1. Update the Gemfile with the new version of Decidim you want to upgrade to, usually just update this part:

```ruby
DECIDIM_VERSION = "0.27.4".freeze
```

2. Run the following commands:

```bash
bundle
bin/rails decidim:upgrade
bin/rails db:migrate
```

3. Check the official [RELEASE_NOTES](https://github.com/decidim/decidim/blob/develop/RELEASE_NOTES.md.md) for any additional steps you might need to perform. Be aware to match your current version with the version you're upgrading to.
4. Test the app locally and check everything works as expected.
5. Commit and push your changes to the repository.
6. Deploy the app to production (refere to the previous Docker section).
