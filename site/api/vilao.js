import axios from "axios";
const api=axios.create({
    baseURL:'http://localhost:5000'
})

export default async function cadastrar(nome,maldades,poder){
    const r= await api.post ('/vilao',{
        nome:nome,
        maldades:maldades,
        poder:poder
    })
    return r.data
}

export default async function consultar(){
    const resposta =await api.get ('/vilaozinho')
    return resposta.data
}


