const mongoose = require("mongoose");

// Configurando o mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => {
        console.log("Conectado ao mongodb!");
    }).catch((err) => {
        console.log(err);
    })

// Model - Usuários

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    age: {
        type: Number, 
        require: true
    },
    country: {
        type: String, 
    }
}) 

// Collection

mongoose.model('users', UserSchema);

const newUser = mongoose.model('users')

new newUser({
    name: "Fulano",
    email: "teste@teste.com",
    idade: 20,
    country: "BR"
}).save().then(() => {
    console.log('usuário criado com sucesso')
}).catch((err) => {
    console.log(err);
})

