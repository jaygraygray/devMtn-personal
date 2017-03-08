
update users 
set articles_liked = concat(articles_liked, $1::text)
where id = $2