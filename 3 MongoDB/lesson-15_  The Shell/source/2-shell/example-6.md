1. Используем blind mongo shell для запуска внешних скриптов

Создайте index.js файл со следующим содержимым
```
show dbs;
use school;
db.school.insert({ name: 'Andrey' });
```