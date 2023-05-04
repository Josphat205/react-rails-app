class GreetingsController < ApplicationController
  def say_hello
    @message = Greeting.order('RANDOM()').first
    @json_message = @message.to_json
    render json: @json_message
  end
end
