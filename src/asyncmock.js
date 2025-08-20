const misProductos =[
    {id:"1", nombre: "Yerba", precio: 1500, img:"../public/img/yerba.jpg", idCat:"almacen", stock: 10},
    {id:"2", nombre: "Fideos", precio: 500, img:"../public/img/fideos.jpg", idCat:"almacen", stock: 15},
    {id:"3", nombre: "Arroz", precio: 400, img:"../public/img/arroz.jpg", idCat:"lacteos", stock: 25},
    {id:"4", nombre: "Aceite", precio: 2500, img:"../public/img/aceite.jpg", idCat:"lacteos", stock: 30},
]

 export const getProductos = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        }, 100);
    })
}

export const getUnProducto = (id) =>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            const producto = misProductos.find(item=>item.id === id)
            resolve(producto)
        },100)
    })
}

export const getProductoPorCategoria = (idCategoria) =>{
    return new Promise(resolve => {
        setTimeout(()=>{
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria)
            resolve(productosCategoria)
        })
    },100)
}