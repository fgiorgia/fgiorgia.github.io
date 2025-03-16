require 'dotenv/load'

# Inspired by https://github.com/iBug/jekyll-environment-variables

module Jekyll
  class EnvVariables < Generator
    safe true
    priority :highest

    def generate(site)
      site.config['env'] = {}
      ENV.each do |key, value|
        site.config['env'][key] = value
      end
    end
  end
end