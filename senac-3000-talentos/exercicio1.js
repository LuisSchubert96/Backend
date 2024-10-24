const https = require("https")
function buscarUsuario(){
    const url = 'https://jsonplaceholder.typicode.com/users/1'
    return new Promise((resolve, reject) => {
        https
        .get (url, (res) => {
            let usuario = ""
            res.on("Dados", (pedaco) => {
                usuario += pedaco;
              });
      
                res.on("end", () => {
                try {
                  const resultado = usuario;
                  resolve(usuario);
                } catch (erro) {
                  reject("Erro ao processar os dados: " + erro);
                }
              });
        })
    })
}
buscarUsuario()
  .then((usuario) => {
    console.log("Dados do usuário:", usuario);
  })
  .catch((erro) => {
    console.error("Erro ao buscar usuário:", erro);
  });