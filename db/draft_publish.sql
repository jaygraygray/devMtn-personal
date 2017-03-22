update articles 
set 
title = $1,
body = $2,
date_published = $3,
headline_img = $4,
published = true,
tags = $5
where id = $6