class Api::V1::PlayersController < ApplicationController

  def index
    players = Player.all.sort_by &:time
    render json: players
  end

  def create
    player = Player.create!(player_params)
    if player
      render json: player
    else
      render json: player.errors
    end
  end

  def show
    if player
      render json: player
    else
      render json: player.errors
    end
    end

  private

  def player
    @player ||= Player.find(params[:id])
  end

  def player_params
    params.permit(:name, :time)
  end

end
