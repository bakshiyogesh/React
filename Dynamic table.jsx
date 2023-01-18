import { useEffect, useState } from "react";
import Thead from "./Showtable";
import Tbody from "./tablebody";
function Fetchdata() {
    const [data, setData] = useState([]);
    useEffect(() => {
      const getdata = async()=>{
        const res=await fetch("https://api2.binance.com/api/v3/ticker/24hr").then((res)=>{if(res.ok) { return res.json()
        }})//http://universities.hipolabs.com/search?country=India
        //https://api2.binance.com/api/v3/ticker/24hr"
        .then((data)=>{setData(data)
        //console.log(data);
        })
        .catch((err)=>console.log(console.error(":-(",err)))
      };
    getdata();
    },[]);
    //Method for table headers created here
    // let Show=()=>{
    //     var count=0
    //     console.log(count);
    //     console.log("data:",JSON.stringify(data));
    //     if(data!==undefined || data!==null){
    //     return(Object.keys(data[0]||{}).map((element,numb)=>{return <th key={numb}>{element}</th>}))
    //     }
    //     else{
    //       console.log("Object is possibly null or undefined:-(");
    //     }
    // }
    // Show();
    //Method for table value created below
    // let Tbody=()=>{
    //   let count=0;
    //       return (data.map((Elem)=>{
    //         return <tr>{Object.values(Elem).map((element)=>
    //         {
    //             return <td>{(element)}</td>
    //             count++;
    //       })
    //     }</tr>
    //     }))
    //     console.log(count);
    // }
    return(<>
    <h1>DYNAMIC TABLE</h1>
    <table>
        <thead>
            <tr>
    <Thead arraydata={data}/> 
    </tr>
    </thead>
    <tbody>
          <Tbody bodydata={data}/>
    </tbody>
    </table>
    </>)
}
export default Fetchdata;