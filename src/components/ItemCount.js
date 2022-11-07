

import {useState} from "react";

function ItemCount(){
    let [num, setNum]= useState(1);
    let incNum =()=>{
        if(num<5)
        {
        setNum(Number(num)+1);
        }
    };
    let decNum = () => {
        if(num>0)
        {
        setNum(num - 1);
        }
    }
    let handleChange = (e)=>{
    setNum(e.target.value);
    }
    return(
        <>
        <div>
            <div>
                <div>
                    <button  type="button" onClick={decNum}>-</button>
                </div>
                <input type="text" value={num} onChange={handleChange}/>
                <div>
                    <button type="button" onClick={incNum}>+</button>
                </div>
                <div>
                    <button onClick={miBoton =>(alert("TU PRODUCTO ESTA EN EL CARRITO")) } className="btn">Agregar al carrito</button>
                </div> 
            </div>
        </div>
    </>
    );
}
export default ItemCount;