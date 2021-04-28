require "test_helper"

class HostsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @host = hosts(:one)
  end

  test "should get index" do
    get hosts_url, as: :json
    assert_response :success
  end

  test "should create host" do
    assert_difference('Host.count') do
      post hosts_url, params: { host: { email: @host.email, firstName: @host.firstName, lastName: @host.lastName, password: @host.password } }, as: :json
    end

    assert_response 201
  end

  test "should show host" do
    get host_url(@host), as: :json
    assert_response :success
  end

  test "should update host" do
    patch host_url(@host), params: { host: { email: @host.email, firstName: @host.firstName, lastName: @host.lastName, password: @host.password } }, as: :json
    assert_response 200
  end

  test "should destroy host" do
    assert_difference('Host.count', -1) do
      delete host_url(@host), as: :json
    end

    assert_response 204
  end
end
