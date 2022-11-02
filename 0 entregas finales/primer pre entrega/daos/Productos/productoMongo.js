import * as manejoMongo from '../../utils/manejoMongo.js'
import { Producto } from '../../models'

class ProductoMongo extends manejoMongo {
    
    constructor(){
        super(Producto)
    }

    async nuevoProducto(nombre,descripcion,codigo,foto,precio,stock){
        try {
         
        } catch (error) {
            console.log(error)
            throw Error(error)
        }
        
    }

    async obtenerProducto(id){
        try {
          
        } catch (error) {
            console.log(error)
            throw Error(error)
        }
    }
    async obtenerProductos(){
        try {
         
        } catch (error) {
            console.log(error)
            throw Error(error)
        }
    }
    async actualizarProducto(id,objeto){
        try {
          
        } catch (error) {
            console.log(error)
            throw Error(error)
        }
      
    }

    async eliminarProducto(id){
        try {
            
        } catch (error) {
            console.log(error)
            throw Error(error)
        }
    }
    
}

module.exports = Producto