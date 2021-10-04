1. Для генерации сертификата выполните следующую команду:
```bash
openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out key.pem
```

2. Для генерации spkac:
```bsah
openssl spkac -key key.pem -challenge <string> -out spkac.cnf
```
3. Доки
```bash
https://www.openssl.org/docs/man1.1.0/man1/openssl-spkac.html
```

