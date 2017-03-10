UPDATE users SET bookmarks_list = replace(bookmarks_list, $1::text, '')
where id=$2;