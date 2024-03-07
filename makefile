install:
	bundle install

dev:
	bundle exec jekyll serve --livereload

build:
	ruby scripts/generate_env_config.rb
	bundle exec jekyll build --future --config=_config.yml,_env.yml
