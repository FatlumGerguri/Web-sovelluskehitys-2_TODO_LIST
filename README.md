# Web-sovelluskehitys 2
Ryhmä 3 (R3)

Ryhmän jäsenet:  <br />
Riku Koski @Arbit3r (ProtectedRoute, Front-end callback, back-end),  <br />
Fatlum Gerguri @Vikingi22 (Front-end, Modal, Validation, Form),  <br />
Hussein AL-Bayati @Hussein3030 (Back-end, Sessios, Cookies, Authentications, Database, JWT),  <br />
Niko Ahonen @tyyppi355 (Animation)

# Rest API

###  POST /register
res null
###  POST /login
res {auth: true, token: token, result: result} <br />
err {auth: false, message: 'wrong email/password'}, {auth: false, message: 'No user exists'}, {err: err}
###  GET  /isUserAuth
res true <br />
err 403 status number
###  GET  /data
res {
"user_Id": ,
"Title": " ",
"Date": " ",
"Description": " ",
"Subtask": ,
"Completed": "",
"id": 
} <br />
err 403 status number
###  POST /InsertData
res true <br />
err 403 status number
###  POST /UpdateData
res true <br />
err 403 status number
###  POST /Delete
res true <br />
err 403 status number
