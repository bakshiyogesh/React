let Tbody=(tabledata)=>{
    console.log("BodyData",JSON.stringify(tabledata));
          // let array=JSON.parse(tabledata);
          // console.log(array);
        return (Array.from(tabledata.bodydata).map((Elem)=>{
          return <tr>{Object.values(Elem).map((element,index)=>
          {
              return <td key={index}>{(element)}</td>
        })
      }</tr>
      }))
  }
  export default Tbody;