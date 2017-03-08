UPDATE articles
SET likes = likes + 1
WHERE id = $1