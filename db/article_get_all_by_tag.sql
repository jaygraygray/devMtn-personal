select * from articles 
where tags like '%' + $1 + '%';