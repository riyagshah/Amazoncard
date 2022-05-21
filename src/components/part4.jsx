import React from "react"
import styles from "../components/cardstyle.module.css"
<script src="https://kit.fontawesome.com/24c494a6b6.js"
crossorigin="anonymous" ></script>
let Part4=({devices})=>{
    return(
        <div className={styles.part4}>
            <p>{devices}</p>
            <img style={{ width:"50px",height:"50px",marginLeft:"60%",marginTop:"3%"}} src="http://clipart-library.com/images_k/right-arrow-png-transparent/right-arrow-png-transparent-17.png"></img>
        </div>
    )
}
export default Part4
{/* <i class="fa-solid fa-arrow-right"></i> */}