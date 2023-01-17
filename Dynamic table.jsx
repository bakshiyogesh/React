import { useEffect, useState } from "react";
function Fetchdata() {
    const [data, setData] = useState([]);
    useEffect(() => {
      //const controller=new AbortController();
      //const signal = controller.signal;
      const getdata = async()=>{
        const res=await fetch("http://universities.hipolabs.com/search?country=India").then((res)=>{if(res.ok) { return res.json()
        }})//http://universities.hipolabs.com/search?country=India
        //https://api2.binance.com/api/v3/ticker/24hr"
        .then((data)=>{setData(data)
        console.log(data);
        // console.log(data.map((elem)=>{
        // return(Object.keys(elem).map((element,numb)=>{return <th key={numb}>{element}</th>}))
        // }))
        // console.log(data.map((element)=>{
        //     return Object.keys(element[0]);
        // }))
        })
        .catch((err)=>console.log(console.error(":-(",err)))
      };
    getdata();
    },[]);
    //Method for table headers created here
    let Show=()=>{
        var count=0
        console.log(count);
        console.log("data:",JSON.stringify(data));
        // data.map((data)=>{
        //   return <th></th>
        // })
        if(data!==undefined || data!==null){
        return(Object.keys(data[0]||{}).map((element,numb)=>{return <th key={numb}>{element}</th>}))
        }
        else{
          console.log("Object is possibly null or undefined:-(");
        }
        //data.map((Elem)=>{
        // return (data.map((Elem)=>{
        //     return Object.keys(Elem);
        //     count++;
        //     console.log(count);
        //     //  return Object.keys(Elem).map((element,number)=>
        //     //  {
        //     //     count++;
        //     //     console.log(count);
        //     //     return (<th key={number}>{(element)}</th>)
        //     //  })
        // }))
    }
    Show();
    //Method for table value created below
    let Tbody=()=>{
          return (data.map((Elem)=>{
            return <tr>{Object.values(Elem).map((element)=>
            {
                return <td>{(element)}</td>
          })
        }</tr>
        }))
        // return (data.map((elem)=>{
        //     return(
        //         <tr>{
        //             <td>
        //                 {
        //     Object.values(elem)
        //                 }</td>
        //     }</tr>);

        // }))
    }
    return(<>
    <h1>DYNAMIC TABLE</h1>
    <table>
        <thead>
            <tr>
    <Show/>
    </tr>
    </thead>
    <tbody>
                <Tbody/>
    </tbody>
    </table>
    </>)
}
export default Fetchdata;