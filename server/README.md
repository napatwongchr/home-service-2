#before start
-install package
    npm install

-add evironment
create .env and insert 
SECRET_KEY
PGPASSWORD
PORT

***
to get secret key past this code on terminal
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"

PGPASSWORD get from ElephanSql