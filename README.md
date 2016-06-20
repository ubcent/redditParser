# Just another Reddit parser

```javascript
node --harmony index.js
```
or
```javascript
npm run start
```

## Консольное приложение

### Параметры

* --format sql|csv - формат выходных данных (по умолчанию csv)
* --orderBy created_utc|score - поле для сортировки (по умолчанию score)
* --order asc|desc - направление сортировки (по умолчанию asc)
* --separator ;|, - разделитель для csv (по умолчанию ;)
* --tableName articles - наименование таблицы для sql (по умолчанию articles)
* -a - агрегация