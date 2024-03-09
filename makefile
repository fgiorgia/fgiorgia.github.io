install:
	bundle install

env_config:
	ruby _scripts/generate_env_config.rb
	ruby _scripts/merge_configs.rb

clean_env_config:
	rm _env.yml
	rm _config.yml

jekyll-serve:
	bundle exec jekyll serve --livereload

jekyll-build:
	bundle exec jekyll build --future

dev: env_config jekyll-serve clean_env_config

build: env_config jekyll-build clean_env_config
