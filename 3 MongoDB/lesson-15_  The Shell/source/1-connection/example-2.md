1. Создадим пользователя для аутентификации
```
use admin
db.createUser(
	{
		user: "system",
		pwd: "1qazxsw2",
		roles: [
				{ role: "root", db: "admin" },
				{ role: "restore", db: "admin" }
			]
	}
)
```

2. Подключемся к MongoDB используя аутентификацию
```
mongo --host mongodb://username@host:port/?authSource=admin
```
OR
```
mongo --username myUser --password --authenticationDatabase admin --host mongoHost --port mongoPort
```