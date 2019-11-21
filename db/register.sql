insert into users(firstname, lastname, email )
values(${firstName}, ${lastName}, ${email})
insert into user(login(username, password))
values(${username}, ${password})
returning username, user_id