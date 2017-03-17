select distinct article_id from drafts 
where author_id = $1
order by article_id