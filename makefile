install:
	bundle install

dev:
	bundle exec jekyll serve --livereload

build:
	bundle exec jekyll build --future