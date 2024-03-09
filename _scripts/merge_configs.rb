require 'yaml'
main_config = YAML.load_file('_base_config.yml')
env_config = YAML.load_file('_env.yml')

# Merge the two objects
merged_config = main_config.merge(env_config)
YAML.dump(merged_config, File.open('_config.yml', 'w'))