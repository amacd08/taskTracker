insert into users (firstname, lastname, email)
values (${firstName}, ${lastName}, ${email});
insert into user_login (username, password)
values (${username}, ${password});
select * from user_login;
