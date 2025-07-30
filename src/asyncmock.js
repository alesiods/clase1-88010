const misProductos =[
    {id:1, nombre: "Yerba", precio: 500, img:"../public/img/yerba.jpg"},
    {id:2, nombre: "Fideos", precio: 500, img:"../public/img/fideos.jpg"},
    {id:3, nombre: "Arroz", precio: 500, img:"../public/img/arroz.jpg"},
    {id:4, nombre: "Aceite", precio: 500, img:"../public/img/aceite.jpg"},
]

 export const getProductos = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        }, 2000);
    })
}