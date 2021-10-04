1. Поднять 3 базы, для чего выполнить последовательно команды
```shell
docker run -d -p 27018:27017 --name mongors1 --hostname mongo1 --net mongo mongo --replSet 'rs0'
```
```shell
docker run -d -p 27019:27017 --name mongors2 --hostname mongo2 --net mongo mongo --replSet 'rs0'
```
```shell
docker run -d -p 27020:27017 --name mongors3 --hostname mongo3 --net mongo mongo --replSet 'rs0'
```
2. Подключиться к MongoDB
```shell
mongo --host 127.0.0.1 --port 27018
```
3. Создать конфиг. Для этого находясь в mongo shell скопировать и вставить следующий код.
```js
const config = {
    "_id": "rs0",
    "members": [
        {
            "_id": 0,
            "host": "mongors1:27017"
        },
        {
            "_id": 1,
            "host": "mongors2:27017"
        },
        {
            "_id": 2,
            "host": "mongors3:27017"
        }
    ]
}
```
4. Инифиировать Replica Set. Для этого находясь в mongo shell скопировать и вставить следующий код.
```js
rs.initiate(config)
```