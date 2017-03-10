UPDATE users SET articles_liked = replace(articles_liked, $1::text, '')
where id=$2;