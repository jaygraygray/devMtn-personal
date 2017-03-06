--query for test data
-- create_new_user.sql
INSERT INTO users (
date_joined, last_login, email, profile_pic, settings, bio, firstname, lastname, tags, bookmarks_list, follows, followed_by, articles_liked) 
VALUES 
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)