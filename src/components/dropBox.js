
export default function DropBox(props)
{

     const dropItems=props.dropItems;
     const drop=props.drop;
     const allowDrop=(ev) =>{
        ev.preventDefault();
      }
      
   
    return<>

<div className="containerBox w-25 px-1 border border-4 py-3 d-flex flex-column justify-content-center align-items-center " style={{ height: '280px' }}  id='mainDiv'   onDrop={drop} onDragOver={allowDrop}>

{
   dropItems.map((Element,index)=>{

    return <div className="py-2 border border-2  bg-danger text-light w-100" id={index} key={index+''+Element}>
           {Element}
       </div>
   })
}
</div>
    
    </>
    
}