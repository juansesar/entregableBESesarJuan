const http = require ("http")
const server = http.createServer((reqquest,response)=>{
    response.end("hola desde el modulo nativo de http")
}

)
server.listen(8080, () => {
    console.log("servidor corriendo puerto 8080")
})