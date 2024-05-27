# imgShare
imgShare es una aplicación web para compartir images, comentarios y más.
![image](/docs/screenshot1.png)
![image](/docs/screenshot2.png)
![image](/docs/screenshot3.png)
![image](/docs/screenshot4.png)

## Variables de Ambiente
### Cliente
* `PUBLIC_DIR`, la dirección del servidor.
* `NODE_ENV`, indica si la cookie es segura.
### Servidor
* `PORT`, el puerto http/https servidor, por default es `4200`.
* `ORIGIN`, la dirección del cliente.
* `JWT`, clave JWT secreta.
* `DB_HOST`, el host de la base de datos PostgreSQL.
* `DB_PORT`, el puerto de la base de datos PostgreSQL.
* `DB_USER`, el usuario de la base de datos PostgreSQL.
* `DB_PASS`, la contraseña de la base de datos PostgreSQL.
* `DB_DATABASE`, el nombre de la base de datos PostgreSQL.

## Instalacion
```
git clone -b imgshare-with-fs --single-branch https://github.com/santiagocuebas/sveltekit-imgshare-app
cd sveltekit-imgshare-app
cd backend
pnpm run todo
cd frontend
pnpm run todo
```

## Mejoras Futuras
- [x] Añadir Nodemailer para emails transaccionales.
- [x] Implementar Tailwind.css.
- [ ] Actualizar la sintaxis a Svelte 5.
- [ ] Añadir Responsive Desing Mobile.

## Herramientas
* Nodejs
* MySQL
* Express
* SvelteKit
* Vite
* TypeScript
