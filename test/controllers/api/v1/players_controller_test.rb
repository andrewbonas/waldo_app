require 'test_helper'

class Api::V1::PlayersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_players_index_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_players_create_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_players_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_players_destroy_url
    assert_response :success
  end

end
