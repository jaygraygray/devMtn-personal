SELECT articles.id, articles.title, articles.author_id, articles.body, articles.date_published, articles.tags, 
articles.responses, articles.response_parent, articles.likes, articles.responses, users.bio, users.firstname, users.lastname, users.id
FROM articles
join users on articles.author_id = users.id
where articles.published = true and articles.id = $1