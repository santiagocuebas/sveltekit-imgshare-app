# imgShare
imgShare is a web application to share images, comments, and more.
![image](/docs/screenshot1.png)
![image](/docs/screenshot2.png)
![image](/docs/screenshot3.png)
![image](/docs/screenshot4.png)

# Enviroment Variables
### Client
* `PORT`, the http client port, default is `4200`.
* `PUBLIC_DIR`, the http server port.
* `JWT`, secret JWT key.
### Server
* `PORT`, the http server port, default is `3000`.
* `DB_HOST`, the MySQL database host.
* `DB_PORT`, the MySQL database port.
* `DB_USER`, the MySQL database username.
* `DB_PASS`, the MySQL database password.
* `DB_DATABASE`, the MySQL database.
* `JWT`, secret JWT key.
* `ORIGIN`, the http client port.
* `NODE_ENV`, indicates if the cookie is secure.
* `DOMAIN`, domain of the server cookie.

# Installation
git clone https://github.com/santiagocuebas/sveltekit-advanced-chat-app\
cd backend\
npm start\
cd frontend\
npm start

# Future Improvements
- [ ] Add Nodemailer for transactional emails.
- [ ] Implement Tailwind.css
- [ ] Update syntax a Svelte 5

# Tools
* Nodejs
* MySQL
* Express
* SvelteKit
* Vite
* TypeScript
