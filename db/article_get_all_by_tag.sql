select * from articles 
<<<<<<< HEAD
where tags like '%'+@1+'%';
=======
where tags like '%' + $1 + '%';
>>>>>>> c88f4617c96aaa9f944fb79ae59376287b1a87fb
