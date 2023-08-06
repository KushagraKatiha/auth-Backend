# auth-Backend
This repository contains backend of authentication of signup and signin feature commonly used in many applications. Code uses JWT to authenticate to further routes after getting loging in 
## Starting the server 
Copy and paste the below code into your terminal after getting into the folder where the code is kept  <br><br>
`
npm i express mongoose dotenv jsonwebtoken nodemon
`<br><br>
Create file named as <br><br>
`
.env
`<br><br>
copy and paste the below code into `.env` file  <br><br>
`
PORT = /port number on which you want to run your server/
`
<br>
`
MONGO_URI = /mongo database cloud url/
`
<br><br>
copy and paste the below code into package.json into script object <br><br>
`
'start': 'nodemon server.js'
` <br><br>
## Start the server
Copy and paste the below command into the terminal after following the above steps <br><br>
`
npm start
`

