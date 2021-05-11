require "test_helper"

class ImgListsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @img_list = img_lists(:one)
  end

  test "should get index" do
    get img_lists_url, as: :json
    assert_response :success
  end

  test "should create img_list" do
    assert_difference('ImgList.count') do
      post img_lists_url, params: { img_list: { imgUrl: @img_list.imgUrl, property_id: @img_list.property_id } }, as: :json
    end

    assert_response 201
  end

  test "should show img_list" do
    get img_list_url(@img_list), as: :json
    assert_response :success
  end

  test "should update img_list" do
    patch img_list_url(@img_list), params: { img_list: { imgUrl: @img_list.imgUrl, property_id: @img_list.property_id } }, as: :json
    assert_response 200
  end

  test "should destroy img_list" do
    assert_difference('ImgList.count', -1) do
      delete img_list_url(@img_list), as: :json
    end

    assert_response 204
  end
end
