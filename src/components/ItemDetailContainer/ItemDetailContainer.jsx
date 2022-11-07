import React, { useState, useEffect } from "react";
import { getSingleItemFromAPI } from "../../mockService/mockService";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount";


function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    let params = useParams();
    let id = params.id;

    useEffect(() => {
    getSingleItemFromAPI(id)
        .then((itemsDB) => {
        setProduct(itemsDB);
        })
        .catch((error) => alert(error));
    }, [id]);



    return (
    <div className="card-detail">
        <div className="card-detail_img">
            <img src={product.thumbnail} alt="Product img" />
        </div>
        <div className="card-detail_detail">
            <h2 style={{color:"white"}}>{product.title}</h2>
            <p style={{color:"white"}}> {product.description}</p>
            <h4 className="priceTag">$ {product.price}</h4>
            <h5 style={{color:"white"}}>Seleccioná la cantidad</h5>
            <ItemCount />
            <button onClick={miBoton =>(alert("PRODUCTO COMPRADO")) } style={{border: "0px", width: "100px", height: "40px", fontSize: "20px"}} >Comprar</button>
        </div>
    </div>
    );
}


export default ItemDetailContainer;