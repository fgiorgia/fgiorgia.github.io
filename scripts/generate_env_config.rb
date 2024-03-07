File.open("_env.yml", 'w') { |file| 
  ENV.each do |key, value|
    file.write("ENV_" + key + ": '" + value + "'\n") 
  end
}

