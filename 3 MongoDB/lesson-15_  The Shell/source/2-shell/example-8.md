1. Используем mongo shell для запуска скрипта

Вариант запуска — копипаст
1. Запустите mongo shell
2. Скопируйте и вставьте следующий код
```js
use school;
const month = ['Mar', 'Apr', 'May'];
for (let i = 0; i < 1000; i++) {
    for(let j = 0; j < month.length; j++){
        db.users.insert({ date: new Date(), month: month[j], scores: Math.random() })
    }
}
```