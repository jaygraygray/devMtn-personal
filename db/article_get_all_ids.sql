select title, id, date_published from articles 
where author_id = $1 AND published = true
order by id desc