select distinct article_id from drafts 
where author_id = $1 AND published = false
order by article_id