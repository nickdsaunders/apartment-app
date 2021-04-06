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

{/_ if you want to only see your apartments - do i need this? _/}
{/_ <Route path="/myapartments" component={MyApartments} /> _/}

<div>
                <a href={sign_out_route}>Sign Out</a>
                {/* can only add if you are logged in */}
                </div>

{!logged_in && (
<div>
<a href={sign_in_route}>Sign In</a>
</div>
)}
