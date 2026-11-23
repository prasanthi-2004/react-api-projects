import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Footer";
import "./recepies.css";
import { useNavigate } from "react-router-dom";

function Recepies(){

    const [recepies,setrecepies]=useState();
    const navigate=useNavigate();

    useEffect(()=>{
        axios.get("https://dummyjson.com/recipes").then((resp)=>{
            console.log(resp.data.recipes);
            setrecepies(resp.data.recipes);
        }).catch((err)=>{
            alert(err);
        })

    },[]);

    const detailsnavigate=(id)=>{
        navigate('/details/'+id);

    }
    return(
        <>
        <div className="container">
            <div className="row">
                <h2 className="text-center text-light py-3">Dummy Json Recepies</h2>
                {
                    recepies && recepies.map((recepie)=>{

                        return(
                            <>
                            <div className="col-lg-3 col-sm-6 mb-3" key={recepie.id}>
                                <div className="card h-100  p-3 rounded-4">
                                    <img src={recepie.image} />
                                    <h5 className="text-nowrap text-truncate py-2">{recepie.name}</h5>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="text-primary"><i class="text-success fa-solid fa-plate-wheat "></i>{recepie.cuisine}</h6>
                                        <span className="btn btn-warning">{recepie.difficulty}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <h6><i class="fa-solid fa-clock text-danger"></i>{recepie.prepTimeMinutes}min</h6>
                                        <h6 className="text-success">Rating:{recepie.rating}</h6>
                                    </div>
                                    <button   className="btn btn-success"  onClick={() =>detailsnavigate(recepie.id)}>View details</button>

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
export default Recepies;