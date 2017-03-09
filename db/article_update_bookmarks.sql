UPDATE articles
SET bookmarks = bookmarks + 1
WHERE id = $1