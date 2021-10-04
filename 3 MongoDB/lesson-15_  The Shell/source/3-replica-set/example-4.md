1. Создать конфиг. Для этого находясь в mongo shell скопировать и вставить следующий код.
```js
const newConfig = {
    "_id": "rs0",
    "protocolVersion": 1,
    "members": [
        {
            "_id": 0,
            "priority": 2,
            "host": "mongors1:27017"
        },
        {
            "_id": 1,
            "priority": 3,
            "host": "mongors2:27017"
        },
        {
            "_id": 2,
            "priority": 1,
            "host": "mongors3:27017"
        }
    ]
}
```
2. Для того что бы обновить конигурацию необходимо выполнить команду
```shell
rs.reconfig(newConfig)
```