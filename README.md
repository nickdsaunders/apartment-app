# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Ruby version

- System dependencies

- Configuration

- Database creation

- Database initialization

- How to run the test suite

- Services (job queues, cache servers, search engines, etc.)

- Deployment instructions

- ...

When I created the user in my seed file, I did users = [ { email: ‘email@email.com’, password: ‘password’} ]

- Setup App
  - created rails app
  - created database
  - added React to the Rails app
  - added Webpacker gem to compile JS
- Commands
  $ rails new hello_world -d postgresql -T
  $ cd hello_world
  $ rails db:create
  $ bundle add react-rails
  $ rails webpacker:install
  $ rails webpacker:install:react

- Create React component
  - created React component "App.js" in the Rails App
  - the install commands created a directory in app called javascript
  - the App.js component will be inside app/javascript
- Commands
  $ rails generate react:install
  $ rails db:migrate
  $ rails generate react:component App

- Generate Rails controller

  - generate the rails controller so we can route the React component and render it in the Rails view.
  - $ rails g controller Home
  - added a file in app/view/home called index.html.erb
  - called the React Component in erb tags to render it in the Rails view
    - <%= react_component "App" %>
  - also need to pass info from Rails Devise into React
    - <%= react_component "App", {
      logged_in: user_signed_in?,
      current_user: current_user,
      new_user_route: new_user_registration_path,
      sign_in_route: new_user_session_path,
      sign_out_route: destroy_user_session_path
      } %>

- Rails Routes

  - Created a route so the React component will be rendered in the Rails view
  - config/routes.rb
  - root to: "home#index" - this is the index.html file we created above

- Add Reactstrap

  - Add bootstrap - $ bundle add bootstrap
  - Modify the Rails stylesheet to be a scss file - allows us to write regular css code as well as import dependencies
  - $ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
  - Add reactstrap - $ yarn add reactstrap
  - add import bootstrap to app scss file - app/assets/stylesheets/application.scss
  - @import 'bootstrap';

- Create Pages, Components, Assets

  - app/javascript/components - takes place of src directory in typical React App
  - import at top of App.js to use with router

- React Router

  - Must add in order to have multiple pages
  - $ yarn add react-router-dom
  - import React-router into App.js
  - add basic routes into App.js using Router and Switch tags
  - added routing constraints to config/routes.rb
  - this directs all HTML traffic to "home#index" the React app, and everything else will be handled normally by Rails router.

- Devise gem for authentication and authorization for a Rails application

  - devise gives us ability to create User model
  - Commands
    $ bundle add devise
    $ rails generate devise:install
    $ rails generate devise User
    $ rails db:migrate
  - Add mailer settings to config/environments/development.rb file
    - config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

- Apartment Resource

  - The Devise User model associated with the Apartment model
  - app/models/apartment.rb - belongs_to :user
  - app/models/user.rb - has_many :apartments
  - Commands
    - $ rails g resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string user_id:integer
    - $ rails db:migrate

- Add login logout button

  - instruct devise to listen for logout request via GET instead of default DELETE
  - config/initializers/devise.rb
    - change config.sign_out_via = :delete to :get
  - in App.js use conditional rendering to display appropriate link depending on if user is logged in or out
  - { logged_in &&
    <div>
    <a href={sign_out_route }>Sign Out</a>
    </div>
    }
    { !logged_in &&
    <div>
    <a href={ sign_in_route }>Sign In</a>
    </div>
    }

- Create a Header component

  - move sign_in and sign_out routes into Header component

- Create mock apartments file

  - populate mock apartments
  - in App.js set the state to be mockApartments so it can be passed around app

- Create apartments index page

  - refactor index route on App.js to be able to pass props to the apartmentindex page
  - apartmentindex will have all apartments available as this.props.apartments
  - to display apartmetns map over the array and use dot notation to access different keys from the apartment object.

- Create apartments show info page (Read)

  - refactor show route and target the id of one apartment
  - save id as a variable
  - use .find() to return the apartment object
  - wrap this in show route, gives us access to the apartment object by id and pass only one apartment to ApartmentShow
  - create a link on the index page to get to the show page for each apartment using the route for {`/apartmentshow/${apartment.id}`}

- Create apartment Create functionality

  - create a form for creating a new listing using reactstrap
  - add constructor, super, and state and set it to a form object with all the data we want to collect.
  - to set the inputs to state we need a handleChange method to be called on every input
  - add value={ this.state.form.keyname } to each form input
  - add onChange={ this.hangleChange} attribute to input also
  - pass the new apartment back to App.js with a method createNewApartment
  - refactor apartmentnew route to be dynamic and accept props

- Creating a migration to add image, title to apartments table

  - $ rails g migration add_column_to_apartment
  - update the change method in the migration file
  - $ rails db:migrate

- Populate seeds file

  - rails db:seed
  - creates data in DB for us to use

- Created delete functionality

  -

- tried to create a spec

- wrote index route and controller method

- Create Functionality

  - Write a test in spec file
    -

- User Stories

Story: As an un-registered guest on the website, I can go to a web page and see a list of available apartments. Apartments have: a street designation, a city, state, a manager's name, manager's contact email, monthly rental price, bedrooms, bathrooms, and whether they allow pets

    logged_out - can GET apartments#index with path /apartments

Story: As an un-registered guest on the website, I can click on an apartment to view its details

    logged out - can GET apartments#show with path /apartments/:id

Story: As an un-registered guest on the website, I can see a header element at the top of each page containing navigation to the other pages

    logged out - can see header component

Story: As a un-registered guest, I can go to registration page with a form and register as a new user

    logged out - can GET user#new with path /user/new to go to page with form to sign up
    might be users/sign_up by default

Story: As a registered user who has not logged in, I can go to a login page

    logged out - can GET to sign_in page with path /users/sign_in

Story: As a logged in user, I should be able to log out

    logged in - can GET to log_out page with path users/sign_out ???

Story: As a logged in user, I can go to a new apartment page with a form and create a new apartment

    logged in - can GET apartments/new page with controller action apartments#new to display a form to create new apartment

Story:: As a logged in user, I can edit the information for any apartment I have created, but I cannot edit the information for apartments that belong to someone else

    logged in - can GET apartments/:id/edit page with controller action apartments#edit to see a page with a form to edit any apartment that belongs to me
