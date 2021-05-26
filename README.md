# Clone of airbnb
---
This is the final project of our team during the internship in Vineti Armenia. The app is a clone of Airbnb booking app. One can register on our application either as a regular user to book a property or as a host user both to give for rent and order. All properties have available and anavailable days based on orders and search algorithm return only available properties for chosen days. One can review only other's properties and only once.

If you want just look through and not to waste time on creating new data, registering new users etc, we've got a solution for you. All data needed will be inserted in your DataBase on server run from CSV files.

The app is written in Ruby on Rails and ReactJS, Redux is used as well.

---

# To run the app:
```sh
cd backend/
bundle
rails db:migrate
rails db:reset
rails s
```

```sh
cd frontend/
npm i
npm start
```

***Please, leave a comment on our code if you see something wrong***
