# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_25_235425) do

  create_table "img_lists", force: :cascade do |t|
    t.string "imgUrl"
    t.integer "property_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["property_id"], name: "index_img_lists_on_property_id"
  end

  create_table "orders", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "property_id", null: false
    t.integer "priceNight"
    t.integer "totalAmount"
    t.date "start_date"
    t.date "end_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["property_id"], name: "index_orders_on_property_id"
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "properties", force: :cascade do |t|
    t.string "title"
    t.string "propType"
    t.string "address"
    t.integer "price"
    t.integer "beds"
    t.integer "rooms"
    t.integer "guests"
    t.text "description"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "currency"
    t.string "latitude"
    t.string "longitude"
    t.index ["user_id"], name: "index_properties_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.integer "rate"
    t.integer "property_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["property_id"], name: "index_reviews_on_property_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "firstName"
    t.string "lastName"
    t.string "email"
    t.boolean "isActive", default: false
    t.string "role"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "img_lists", "properties"
  add_foreign_key "orders", "properties"
  add_foreign_key "orders", "users"
  add_foreign_key "properties", "users"
  add_foreign_key "reviews", "properties"
  add_foreign_key "reviews", "users"
end
