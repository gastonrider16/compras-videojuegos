# compras-videojuegos

Inicialmente la página web de compras de videojuegos estaba solo hecha en JS, HTML5, Bootstrap y CSS. 
Dado a que con Angular, se podrá modularizar mejor los ficheros HTML, se decidió implementar Angular. Así que solo la pagina web estará programada en Angular (Typescript, HTML5, CSS3, etc). Se seguirá usando Bootstrap.

NOTAS:
1) Si modificas un archivo que es ajeno al codigo, por favor hace git pull, y luego pushea, que sino te saldra error. Igualmente se recomienda que antes que codees, hagas git pull.
2) Si queres hacer git add y git commit de una, usa git commit -am "......"
3) Si queres etiquetar tus versions, despues de git commit -am "...", usa git tag -a v13 -m "Version 13". Luego git push --tags para que se refleje los tags.
4) Si queres hacer un revert, usa git revert tu_numero_de_commit (por ejemplo: git revert 89d6ec5) y luego git push.
5) En HTML5, si usarás la eitqueta button, NO uses como evento onSubmit, usa onClick. Esto es siempre y cuando no uses la etiqueta form, sino tendra que usar onsubmit, pero en la etiqueta form y nada de onclick en button.
6) Para iniciar Angular, en la carpeta creada por angular, mediante consola, escribir ng serve --open
