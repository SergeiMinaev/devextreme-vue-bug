В prod-версии не работает DxDateBox с type='datetime'. В dev-версии ошибки нет. С type='date' работает и там и там.

Для запуска prod-версии:
```
  npm ci
  npm run build
  npm run serve
```
И попробовать открыть DxDateBox на странице, кликнув на кнопку инпута. В консоли будет ошибка `Uncaught TypeError: r[n] is not a function`
