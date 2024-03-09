install:
	bundle install

env_config:
	ruby _scripts/generate_env_config.rb

dev: env_config
	bundle exec jekyll serve --livereload --config=_config.yml,_env.yml

build: env_config
	bundle exec jekyll build --future --config=_config.yml,_env.yml
