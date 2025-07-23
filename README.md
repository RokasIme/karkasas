![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)
![Gluten Status](https://img.shields.io/badge/Gluten-Free-green.svg)
![Eco Status](https://img.shields.io/badge/ECO-Friendly-green.svg)
[![Discord](https://discord.com/api/guilds/571393319201144843/widget.png)](https://discord.gg/dRwW4rw)

# This is a JavaScript exam project

_website design project_

<br>

## 🌟 About

This project is for exam porpuses only. Pull request are welcome, but priority for project authors! Thank you for your cooperation!
To log in, you can use the following credentials:
<br>
ADMIN: <br>
Username: admin@admin.lt <br>
Password: admin@admin.lt <br>
USER: <br>
rokas@rokas.lt <br>
rokas@rokas.lt

## 🎯 Project features/goals

- CLIENT: react.js
- SERVER: express.js
- API

## 🧰 Getting Started

### 💻 Prerequisites

Node.js - _download and install_

```
https://nodejs.org
```

Git - _download and install_

```
https://git-scm.com
```

### 🏃 Run locally

Would like to run this project locally? Open terminal and follow these steps:

1. Clone the repo
   ```sh
   git clone https://github.com/RokasIme/egzaminas.git
   ```
2. Install main NPM packages
   ```sh
   npm i
   ```
3. Install sub-directories NPM packages
   ```sh
   npm run install-all
   ```
4. Run the servers
   ```sh
   npm run dev
   ```

### 🧪 Running tests

There is no tests for this project.

## 🎅 Authors

Rokas: [Github](https://github.com/RokasIme)

## ⚠️ License

Distributed under the MIT License. See LICENSE.txt for more information.

## 🔗 Other resources

No other resources.

To run this project you need create MariaDB SQL bases:

CREATE TABLE users (
id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(50) NOT NULL,
password_hash CHAR(128) NOT NULL,
salt CHAR(10) NOT NULL,
role VARCHAR(50) NOT NULL DEFAULT ""user"",
isBanned TINYINT(1) NOT NULL DEFAULT 0
);

CREATE TABLE tokens (
id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
text CHAR(20) NOT NULL,
user_id INT(10) UNSIGNED NOT NULL,
INDEX (user_id)
);

CREATE TABLE ads (
id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
category_id INT(10) UNSIGNED NOT NULL,
description VARCHAR(1000) NOT NULL,
price DECIMAL(10,2) NOT NULL DEFAULT 0.00,
thumbnail VARCHAR(100) NOT NULL,
banned TINYINT(1) NOT NULL DEFAULT 0,
user_id INT(10) UNSIGNED NOT NULL  
);

CREATE TABLE categories (
id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL
);

CREATE TABLE comments (
id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
text VARCHAR(1000) NOT NULL,
isBanned TINYINT(1) NOT NULL DEFAULT 0,
user_id INT(10) UNSIGNED NOT NULL,
ad_id INT(10) UNSIGNED NOT NULL
);

CREATE TABLE likes (
id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
user_id INT(10) UNSIGNED NOT NULL,
ad_id INT(10) UNSIGNED NOT NULL,
is_liked TINYINT(1) NOT NULL DEFAULT 0);
