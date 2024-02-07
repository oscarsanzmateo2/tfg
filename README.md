Per poder provar en local l'aplicació, et farà falta la base de dades. Jo faig servir XAMPP: https://www.apachefriends.org/es/index.html.

XAMPP, et permet tenir MySQL directament en el localhost. Per fer-lo servir nomes cal que, una vegada ho tinguis instal·lat, en Actions premis el botó de Start als serveis d'Apache i de MySQL, després, apretes a admin de MySQL, i l'hauries de tenir com a pestanya en el navegador.

Una vegada ho tinguis, podràs importar directament el fitxer tfg-2023-2024.sql.

Un cop muntada la base de dades, descarrega el codi tant clonant-lo com fent un pull request.

Després simplement llença la comanda cd app.

npm install per descarregar les dependencies del codi.

Recordar també el introduïr la clau de l'API (la podeu trobar al dossier en Codi i visualització de l'entorn en el .txt Enllaços importants) en el fitxer .env que es troba a /app/.env, on haureu de modificar la variable OPENAI_API_KEY = "", per OPENAI_API_KEY = "la_clau_API_de_OpenAI".

I fent tot seguit node app.js ja hauries de tenir l'aplicacio funcionant.

Per poder visualitzar-la ves a un navegador, i busca http://localhost:3000/.

Remarcar tambè et farà falta tant node com npm.

Teniu un video explicant com instalar el entorn pas a pas en el dossier a /index/Codi

Si tens algun dubte o falla envia un correu a 1500824@uab.cat i intentaré respondre com més aviat millor.

Moltes gràcies pel vostre temps.
