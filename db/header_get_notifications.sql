--SELECT * FROM notifications WHERE user_id = 3
--ORDER BY notification_id DESC
--LIMIT 10;


SELECT users.firstname, users.lastname, users.id, users.profile_pic, notifications.user_id, notifications.action, 
notifications.action_by_userid, notifications.action_on_id, notifications.article, notifications.response, notifications.self
FROM notifications
JOIN users ON users.id = notifications.action_by_userid 
WHERE user_id=3
ORDER BY notifications.notification_id DESC
LIMIT 10