import { useState } from "react";
import DropBox from "./dropBox";

export default function Items() {
    const items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5','item 6'];
    const [list, setList] = useState(items);
    const [dropItems,setDropItems]=useState([]);
    
    const drag=(ev) =>{
        ev.dataTransfer.setData("text", ev.target.id);
      }
      
      const drop=(ev)=> {
        ev.preventDefault();
        var mdata = ev.dataTransfer.getData("text");
        let id=ev.target.id;
        let data=mdata.at(-2);
        let index=mdata.at(-1);
        let temp=[...dropItems];
        
        if(id==='mainDiv')
            {
               temp.push('item'+data);
            }
        else 
            {
               let slice_index=+(id);
               temp.splice(slice_index,0,'item'+data);

            }

           setDropItems(temp);
           let new_list=list;
           new_list.splice(index,1);
           setList(new_list);
          console.log();
      }
      
    return <>

<h1>Drag And Drop</h1>

        <div className="w-100 d-flex p-1 justify-content-center align-items-center gap-4">

            <div className="w-25 border border-dark px-1 d-flex flex-column justify-content-center align-items-center py-3" style={{ height: '280px' }} >
                {
                    list.map((Element, index) => {

                        return <div className="py-2 border border-2  bg-secondary text-dark w-100" id={Element+index} key={index} nos={index} draggable='true' onDragStart={drag}>
                            {Element}
                        </div>

                    })
                }

            </div>

            <DropBox dropItems={dropItems} drop={drop}/>



        </div>


    </>


}