--query for dest data
--yes, dest.
--test_create_draft
INSERT INTO drafts (
article_id, date, body) VALUES
($1, $2, $3, $4)