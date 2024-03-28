import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import api from "../api";
import './Products.css'

export default function Products(){
    const [products, setProducts] = useState<any[]>([]);

    const getProducts = async () => {        
       await api.get("/products").then((response)=> setProducts(response.data));
    };

    const navigate = useNavigate();

    function check(){
        return (
            navigate('/cadastrar')
        )
    }

    useEffect(()=>{
        getProducts();
    }, []);

    return (     
                products ? (             
                <div className="App">            
                <h2>Listagem de produtos</h2>                                                                  
                                <Table bordered striped responsive>                                    
                                    <thead>
                                        <tr>                                        
                                            <th>Nome</th>
                                            <th>Valor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="Alinhamento">                                        
                                            <td>
                                            {products.map((p) => <tr>{p.Name}</tr> )}                                                                                                                                                                                        
                                            </td>          
                                            <td>                                        
                                                {products.map((p)=> <tr>{p.Value}</tr>)}
                                            </td>                                                                    
                                        </tr>                                                                          
                                    </tbody>
                                </Table>                                                                                                          
                    <button className="btn" onClick={check}>Novo produto</button>            
            </div>) : <h1></h1>
             )
                   
     }        

