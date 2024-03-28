<h1 align="center">Utilizando Cypress E2E para testar um Blog em Angular | Digital innovation one</h1>
<p align="center">
    <img src="./cypre.webp" alt="cypress" tittle="Digital Innovation One Cypress" width="30%">
</p>

------



## 💡Para instalar Angular no projeto: 

```
npm install
```


## 💡Para abrir projeto: 

```
npm run start
```


## 💡Para instalar cypress: 

```
npm install cypress --save-dev
```


## 💡Para verificara  versão do cypress
```
npx cypress -v
```


## 💡Salvar a desisntalacao do protractor
```
npm uninstall --save-dev protractor
```


## 💡Remover do Package.json de Scripts
```
"ng": "ng",

```


## 💡Para Abrir o cypress
```
npx cypress open

```


## 💡entra e voltar nas duas opcoes para gerar os exemplos
```
![alt text](01.png)
```


## 💡Para executar os teste 
```
(para todos os testes)
npx cypress run

(somente um roteiro)
npx cypress run --spec ".\cypress\integration\examples\exemplo.spec.js"

(abrir a interface)
npx cypress open

```


## 💡Extensão Cypress
```
https://chromewebstore.google.com/detail/cypress-recorder/glcapdcacdfkokcmicllhcjigeodacab
```

## 💡cypress.json nao é mais suportado
```
*Essas Configurações devem ser adicionadas a cypress.config.ts
📌*Não consegui resolver esse problema para poder rodar o npx cypress run

Cypress.config('baseUrl', 'http://localhost:4200');
Cypress.config('pageLoadTimeout', 30000);
Cypress.config('defaultCommandTimeout', 30000);
Cypress.config('viewportWidth', 500);
Cypress.config('viewportHeight', 800);
Cypress.config('retries', 3);
``` 
