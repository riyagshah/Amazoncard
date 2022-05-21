import React from "react"
import styles from "../components/cardstyle.module.css"


let Part4=({arrow,devices})=>{
    
    return(
        <div className={styles.part4}>
            <p>{devices}</p>
            <img  style={{ width:"50px",height:"50px",marginLeft:"60%",marginTop:"3%"}} src={arrow} ></img>
        </div>
    )
}
export default Part4
{/* <i class="fa-solid fa-arrow-right"></i> */}