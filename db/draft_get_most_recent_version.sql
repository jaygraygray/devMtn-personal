select * from drafts
where article_id = $1
order by draft_id desc limit 1