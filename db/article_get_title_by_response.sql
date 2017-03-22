select articles.title 
from articles
join responses on responses.article_id = articles.id
where responses.article_id = $1 and published = true;