SELECT articles.id, articles.author_id, articles.title, articles.date_published, articles.tags, 
articles.likes, articles.responses, articles.body, users.firstname, users.lastname
FROM articles
JOIN users on articles.author_id = users.id
where articles.published = true
order by id desc;