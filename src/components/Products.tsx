import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import api from "../api";
import Table from 'react-bootstrap/Table'
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default function Products(){
    const [products, setProducts] = useState([]);
    const getProducts = async () => {        
        await fetch("http://192.168.0.13:8080/products")                            
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

    console.log(products)
    
        return (
            <div>
      {products ? (
        products.map((product) => (            
          <Container>            
            <h2>Listagem de Produtos</h2>
            <Table>
                <thead>                 
                    <tr>
                        <th>Nome</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.Name}</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        ))
      ) : (        
        <div>            
            <h2>Listagem de Produtos</h2>
            <Table bordered>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
      )}
    </div>      
            
        )

    }

