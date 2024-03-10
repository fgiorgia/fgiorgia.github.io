install:
	bundle install

jekyll-serve:
	bundle exec jekyll serve --livereload

jekyll-build:
	bundle exec jekyll build --future

dev: jekyll-serve

build: jekyll-build
