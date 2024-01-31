# imgShare
imgShare is a web application to share images, comments, and more.
![image](/docs/screenshot1.png)
![image](/docs/screenshot2.png)
![image](/docs/screenshot3.png)
![image](/docs/screenshot4.png)

## Enviroment Variables
### Client
* `PUBLIC_DIR`, the http/https server port.
* `NODE_ENV`, indicates if the cookie is secure.
### Server
* `PORT`, the http/https server port, default is `4200`.
* `ORIGIN`, the http/https client port.
* `JWT`, secret JWT key.
* `CLOUDINARY_NAME`, the cloudinary name.
* `CLOUDINARY_KEY`, the cloudinary key.
* `CLOUDINARY_SECRET`, the cloudinary secret.
* `DB_HOST`, the MySQL database host.
* `DB_PORT`, the MySQL database port.
* `DB_USER`, the MySQL database username.
* `DB_PASS`, the MySQL database password.
* `DB_DATABASE`, the MySQL database.

## Installation
```
git clone https://github.com/santiagocuebas/sveltekit-advanced-chat-app
cd sveltekit-advanced-chat-app
cd backend
pnpm install
pnpm run build
pnpm run preview
cd frontend
pnpm install
pnpm run build
pnpm run preview
```

## Future Improvements
- [x] Add Nodemailer for transactional emails.
- [x] Implement Tailwind.css
- [ ] Update syntax a Svelte 5

## Tools
* Nodejs
* MySQL
* Express
* SvelteKit
* Vite
* TypeScript
