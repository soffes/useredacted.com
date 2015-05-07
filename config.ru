require 'rubygems'
require 'bundler'
Bundler.require(:default, ENV['RACK_ENV'])

use Rack::CanonicalHost, ENV['CANONICAL_HOST'] if ENV['CANONICAL_HOST']

map '/assets' do
  sprockets = Sprockets::Environment.new
  sprockets.append_path 'assets/stylesheets'
  sprockets.append_path 'assets/images'
  sprockets.append_path 'assets/javascripts'
  run sprockets
end

class App < Sinatra::Base
  get '/' do
    erb :home
  end

  get '/help' do
    redirect '/support'
  end

  get '/support' do
    erb :support
  end

  get '/press' do
    erb :press
  end
end

run App
