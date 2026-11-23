import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details(){
   let {id} =  useParams();
    // const [details,setdetails]=useState();
    // let details;
    //  console.log(details);
    const[name, setName] = useState();
    const[image, setImage] = useState();
    const[ingrediants, setIngrediants] = useState();
    const[cuisine,setcuisine]=useState();
    const[mealType,setmealType]=useState();
    const[cookTimeMinutes,setCookTimeMinutes]=useState();
    const[caloriesPerServing,setcaloriesPerServing]=useState();
    const[difficulty,setdifficulty]=useState();
    const[prepTimeMinutes,setprepTimeMinutes]=useState();
    const[rating,setrating]=useState();
    const[reviewCount,setreviewCount]=useState();
    const[servings,setservings]=useState();
    const[userId,setuserId]=useState();
    const[instructions,setinstructions]=useState();

    useEffect(()=>{
        // console.log("ID:" +id);
        axios.get(`https://dummyjson.com/recipes/${id}`).then((resp)=>{
            console.log(resp.data);
            // setdetails(resp.data);
            // details = resp.data;

           setName(resp.data.name);
            setImage(resp.data.image)
            setIngrediants(resp.data.ingredients);
            setcuisine(resp.data.cuisine);
            setmealType(resp.data.mealType);
            setCookTimeMinutes(resp.data.cookTimeMinutes);
            setcaloriesPerServing(resp.data.caloriesPerServing);
            setdifficulty(resp.data.difficulty);
            setprepTimeMinutes(resp.data.prepTimeMinutes);
            setrating(resp.data.rating);
            setreviewCount(resp.data.reviewCount);
            setservings(resp.data.servings);
            setuserId(resp.data.userId);
            setinstructions(resp.data.instructions);
        }).catch((err)=>{
            alert(err);
        })

    },[]);


    return(
        <>
       
            <div className="container">
                <div className="row flex-wrap-reverse">
                    <div className="col-md-6">
                        <h2 className="text-primary py-3">{name}</h2>

                        <div className="row">
                            <div className="col-md-6">
                                <h5><i class="fa-solid fa-bowl-food text-warning"></i> {mealType}</h5>
                                
                            </div>
                            <div className="col-md-6">
                              <h5 className="fst-italic"> <i class="fa-solid fa-utensils text-warning"></i> {cuisine}</h5>
                            </div>
                            <div className="col-md-6">
                                <h5><i class="fa-solid fa-fire-burner text-warning"></i> {cookTimeMinutes} min</h5>
                            </div>
                            <div className="col-md-6">
                                <h5><i class="fa-solid fa-wheat-awn-circle-exclamation text-warning"></i> {caloriesPerServing} cal</h5>
                                
                            </div>
                            <div className="col-md-6">
                                <h5><i class="fa-solid fa-cloud-meatball text-warning"></i> {difficulty}</h5>
                            </div>
                            <div className="col-md-6">
                                <h5><i class="fa-solid fa-alarm-clock text-warning"></i> {prepTimeMinutes} mins</h5>
                                
                            </div>
                            <div className="col-md-6">
                                <h5><i class="fa-solid fa-star text-warning"></i> {rating}</h5>
                            </div>
                            <div className="col-md-6">
                                <h5><i class="fa-solid fa-hourglass-start text-warning"></i> {reviewCount} count</h5>
                                
                            </div>
                            <div className="col-md-6">
                                <h5><i class="fa-solid fa-person-circle-question text-warning"></i> {servings}</h5>
                            </div>
                            <div className="col-md-6">
                                <h5><i class="fa-solid fa-user text-warning"></i> {userId}</h5>
                            </div>

                        </div>
                       
                       
                        <h3 className="text-danger py-3">Ingrediants</h3>
                        <div className="row">
                            {
                            ingrediants && ingrediants.map((ingrediant) => {
                                return(
                                    <div className="col-md-6">
                                        <h6><i class="fa-solid fa-circle-check text-success"></i> {ingrediant}</h6>
                                    </div>

                                
                                )
                            })
                        }
                            
                        </div>
                            
                        
                        
                        <h3 className="text-success py-3">Instructions</h3>
    
                        <ul className="">
                            {
                                instructions && instructions.map((instruction)=>{
                                    return(
                                        <li>{instruction}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="col-md-6 mt-5 pt-3">
                        <img src={image} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        
      
       </>
    );
}
export default Details;