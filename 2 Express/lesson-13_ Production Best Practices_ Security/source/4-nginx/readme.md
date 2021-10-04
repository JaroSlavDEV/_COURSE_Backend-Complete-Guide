1. Для генерации HTTPS сертификатов при помощи certbot необходимо выполнить команду
```
sudo certbot certonly --standalone --preferred-challenges http -d sotream.xyz -d www.sotream.xyz
```

2. Для запуска проекта нужно выполнить:
   1. Установить докер
   2. Запустить команду 
    ```
    docker-compose up -d
    ```
