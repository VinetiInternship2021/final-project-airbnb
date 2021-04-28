require "test_helper"

class RegUsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @reg_user = reg_users(:one)
  end

  test "should get index" do
    get reg_users_url, as: :json
    assert_response :success
  end

  test "should create reg_user" do
    assert_difference('RegUser.count') do
      post reg_users_url, params: { reg_user: { email: @reg_user.email, firstName: @reg_user.firstName, lastName: @reg_user.lastName, password: @reg_user.password } }, as: :json
    end

    assert_response 201
  end

  test "should show reg_user" do
    get reg_user_url(@reg_user), as: :json
    assert_response :success
  end

  test "should update reg_user" do
    patch reg_user_url(@reg_user), params: { reg_user: { email: @reg_user.email, firstName: @reg_user.firstName, lastName: @reg_user.lastName, password: @reg_user.password } }, as: :json
    assert_response 200
  end

  test "should destroy reg_user" do
    assert_difference('RegUser.count', -1) do
      delete reg_user_url(@reg_user), as: :json
    end

    assert_response 204
  end
end
