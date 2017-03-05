INSERT INTO articles (
author_id, title, body, date_started, date_published, headline_img, published, tags,
views, likes, bookmarks, responses, response_parent, tagline) 
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);