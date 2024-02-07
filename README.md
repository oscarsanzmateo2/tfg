Per poder provar en local l'aplicació, et farà falta la base de dades. Jo faig servir XAMPP: https://www.apachefriends.org/es/index.html.
XAMPP, et permet tenir MySQL directament en el localhost. Per fer-lo servir nomes cal que, una vegada ho tinguis instal·lat, en Actions premis el botó de Start als serveis d'Apache i de MySQL, després, apretes a admin de MySQL, i l'hauries de tenir com a pestanya en el navegador.
Una vegada ho tinguis, podràs importar directament el fitxer tfg-2023-2024.sql.
Un cop muntada la base de dades, podràs anar al codi, fer cd app, i després fent node app ja hauries de tenir l'aplicacio funcionant.
Per poder visualitzar-la ves a un navegador, i busca http://localhost:3000/.

Remarcar tambè et farà falta tant node com npm.

Teniu un video explicant com instalar el entorn pas a pas en el dossier a /index/Codi

Si tens algun dubte o falla envia un correu a 1500824@uab.cat i intentaré respondre com més aviat millor.

-------Molt important!!!------

M'he trobat un error en la versió de GitHub, bàsicament el directori "node_modules" trobat dins del directori app no es carrega correctament realitzant "npm install".

Per poder utilitzar aquesta versió (la de GitHub, la versió del dossier no té aquest problema) haureu d'eliminar o manualment o fent servir línies de comandes aquesta carpeta.
Comandes: (suposant que esteu en la carpeta inicial tfg-main)
cd app
En Windows és: Remove-Item -Recurse -Force .\node_modules\
En Linux és: rm -rf node_modules

Un cop eliminada la carpeta tfg-main/app/node_modules, simplement la torneu a generar fent "npm install".

Amb això, si ja teniu instal·lades les altres aplicacions com node.js i XAMPP amb la base de dades carregada, ja us hauria de funcionar la comanda "node app.js".

Disculpes i gràcies pel vostre temps.
