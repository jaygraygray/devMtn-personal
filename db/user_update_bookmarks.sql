
update users 
set bookmarks_list = concat(bookmarks_list, $1::text)
where id = $2