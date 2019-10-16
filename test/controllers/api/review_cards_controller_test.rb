require 'test_helper'

class Api::ReviewCardsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_review_cards_index_url
    assert_response :success
  end

  test "should get create" do
    get api_review_cards_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_review_cards_destroy_url
    assert_response :success
  end

end
