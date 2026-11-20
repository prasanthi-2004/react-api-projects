import axios from "axios";
import { useEffect, useState } from "react";
import "./products.css";
import Footer from "../Footer";
function Products(){
    const [products,setProducts]=useState();
    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then((resp)=>{
            console.log(resp.data.products);
            setProducts(resp.data.products);
        }).catch((err)=>{
            alert(err);
        });

    

    },[]);

    return(
        <>
        <div className="container">
            <div className="row">
                <h1 className="text-center text-warning py-3">Dummy Json Product Details</h1>
                {
                    products && products.map((product)=>{

                        return(
                            <>
                            
                            <div className="col-lg-3 col-sm-6 mb-3 " key={product.id}>
                               
                                <div className="card h-100 p-3 ">
                                    <img src={product.thumbnail} alt="" className="card-img"/>
                                    <h5 className=" py-3 text-nowrap text-truncate" >{product.title}</h5>
                                    <div className="d-flex justify-content-between">
                                        <span className="text-danger">{product.tags[0]}</span>
                                        <span className="btn btn-warning">{product.availabilityStatus}</span>
                                        
                                    </div>
                                    
                                    <div className="d-flex justify-content-between pt-3">
                                        <span className="text-primary fs-5 fw-bold">${product.price}</span>
                                        <span>Ratings:{product.rating}</span>
                                    </div>

                                </div>

                            </div>
                              </>
                        );
                    })
                }
            </div>
          
        </div>
                    

                
                   
        <Footer/>    
        
        
        
        
        </>
    );
}
export default Products;