// reusable card component
const GroceryItem = (props) => {
  return (
    
       <>
       {props.data.map(({id,title,imgURL,mrp,sellingPrice})=>{
          return(
            <>
            <div  className="allelement">
            <div>
                <img src={imgURL} alt="" />
               
                </div>
                <h5>{title}</h5>
                <div style={{display:"flex"}}>
                    <p>{sellingPrice}</p>
                    <p>{mrp}</p>
                </div>
                </div>
            
            </>
          )
         })}
    </>
  );
};
export default GroceryItem;
