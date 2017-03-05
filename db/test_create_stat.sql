INSERT INTO article_stats (
article_id, viewed_by, liked_by, finished_by, facebook_shared_by, twitter_shared_by, bookmarked_by
) VALUES 
($1, $2, $3, $4, $5, $6, $7)