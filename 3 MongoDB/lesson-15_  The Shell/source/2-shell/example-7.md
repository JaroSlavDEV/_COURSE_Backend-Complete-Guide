1. Используем blind mongo shell для запуска внешних скриптов

Вариант запуска — внешний файл
Создайте index.js файл со следующим содержимым
```js
use school;
const month = ['Mar', 'Apr', 'May'];
for (let i = 0; i < 1000; i++) {
    for(let j = 0; j < month.length; j++){
        db.users.insert({ date: new Date(), month: month[j], scores: Math.random() })
    }
}
```