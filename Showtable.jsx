// function Thead(props){
//     //console.log( props);
//     //console.log("data:",JSON.stringify(props));
//     console.log(props)
//     return(
//       props&&props.arraydata&&Object.keys(props.arraydata[0]).map((element,numb)=>{return <th key={numb}>{(element)}</th>})
//     )
   
//   }

  import React from 'react'
  
  export default function Showtable(props) {
    console.log("data :", JSON.stringify(props))
    return (
      props && props.arraydata && props.arraydata.length > 0 && Object.keys(props.arraydata[0]).map((element,numb)=>{return <th key={numb}>{(element)}</th>})
    )
  }
  
//export default Thead;