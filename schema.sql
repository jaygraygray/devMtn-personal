CREATE TABLE articles (
id 				SERIAL PRIMARY KEY NOT NULL,
author_id 		INT,
title 			varchar(255),
body 			text,
date_started	date,
date_published	date,
headline_img	varchar(255),
published 		boolean,
tags			varchar(75),
views			int,
likes			int,
bookmarks		int,
responses		int,	
response_parent	int,
tagline			varchar(255)
);

CREATE TABLE responses (
id 				SERIAL PRIMARY KEY NOT NULL,
author_id		INT,
body			text,
date 			date,
article_id 		INT,
views			INT,
likes			INT,
char_begin 		INT,
char_end		INT,
personal		boolean
);

CREATE TABLE users (
id 				SERIAL PRIMARY KEY NOT NULL,
date_joined 	date,
last_login 		date,
email			varchar(100),
profile_pic		varchar(255),
settings		json,
bio				text,
firstname		varchar(50),
lastname		varchar(50),
tags			text,
bookmarks_list	text,
follows			text,
reading_history	text,
followed_by		text,
articles_liked	text
);

CREATE TABLE drafts (
draft_id 	SERIAL PRIMARY KEY NOT NULL,
author_id	INT,
article_id 	INT,
date 		date,
body		text
);

CREATE TABLE notifications (
notification_id		SERIAL PRIMARY KEY NOT NULL,
user_id				INT,
action				VARCHAR(10),
action_by_userid	INT,
action_on_id		INT,
article 			BOOLEAN,
response 			BOOLEAN,
self  				BOOLEAN,
date 				DATE
);

CREATE TABLE featured_articles (
feature_id 		SERIAL PRIMARY KEY NOT NULL,
article_id 		INT,
date 			DATE,
active  		boolean
);

CREATE TABLE article_highlights (
highlight_id	SERIAL PRIMARY KEY NOT NULL,
user_id			INT,
article_id 		INT,
char_begin		INT,
char_end		INT
);

CREATE TABLE article_stats (
stat_id				SERIAL PRIMARY KEY NOT NULL,
article_id 			INT,
viewed_by 			TEXT,
liked_by 			TEXT,
finished_by 		TEXT,
facebook_shared_by 	TEXT,
twitter_shared_by   TEXT,
bookmarked_by		TEXT,
avg_time		INT
);