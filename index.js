import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './header';
import Fetchdata from './Dynamic table';
// import App from './App';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const name="DON";
// const date=new Date().toLocaleDateString();
// const time=new Date().toLocaleTimeString();
// root.render(
//   <>
//   <header>ReactJS Tutorial examples</header>
//   <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
//   <a className="navbar-brand" href="/">Todo App</a>   
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto">
//       <li className="nav-item active">
//         <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/">Contact</a>
//       </li>
//     </ul>
//   </div>
// </nav>
//    <h1>REACT JS </h1> 
//    <p>React components</p>
//    <ol>
//      <li>Functional</li>
//      <li>ClassNamefull</li>
//    </ol>
//      <h1 contentEditable="false">{`MY NAME IS ${name}`}</h1>
//      <p>Today date is:{date}</p>
//      <p>Time in my computer at present is:{time}</p> 
//      <a href='https://cyware.com/hacker-news' target="_blank" rel="noreferrer">  
//      <img src='https://c4.wallpaperflare.com/wallpaper/47/95/705/anonymus-hacker-computer-mask-wallpaper-preview.jpg' alt="IMage not found"></img>
//      <img src="https://c4.wallpaperflare.com/wallpaper/489/750/377/hacking-hackers-computer-anonymous-wallpaper-preview.jpg" alt="IMage not found"></img>
//      </a>
//     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//      <Prop name="Mahesh"></Prop>
//   </>
// )
// function TimeandDate(prop){
//   const element=(<div>
//     <h1>Hello Sanasar!</h1>
//     <h2>It is{new Date().toLocaleDateString()} Today's Date</h2>
//     <h3>It is time at now{new Date().toLocaleTimeString()}</h3>
//   </div>);
//   root.render(
//     <>
//     <TimeandDate></TimeandDate>
//     <div className="cotainer">
//       <div className="form-outline">
//   <textarea className="form-control" id="textAreaExample1" rows="5"></textarea>
//   <label className="form-label" for="textAreaExample">Message</label>
// </div>
// </div>
//     </>
//     )
//   }; 
// <TimeandDate></TimeandDate>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
{/* <div className='head'>
  <Header></Header>
</div>
  <div>
    <h1>Hello Sanasar!</h1>
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <a className="navbar-brand" href="/">Todo App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <h1>Counter value:</h1>
    <h2>It is{new Date().toLocaleDateString()} Today's Date</h2>
    <h3>It is time at now{new Date().toLocaleTimeString()}</h3>
  </div>
  <a href='https://cyware.com/hacker-news' target="_blank" rel="noreferrer">
    <img src='https://c4.wallpaperflare.com/wallpaper/47/95/705/anonymus-hacker-computer-mask-wallpaper-preview.jpg' alt="IMage not found"></img>
    <img src="https://c4.wallpaperflare.com/wallpaper/489/750/377/hacking-hackers-computer-anonymous-wallpaper-preview.jpg" alt="IMage not found"></img>
  </a> */}
  <Fetchdata></Fetchdata>
  <footer><p>All rights are reserved{'\u00A9'}2022</p></footer>
  {/* <button type="button" onclick="" className="btn btn-success my-4">Success</button>
  <button type="button"  onclick="" className="btn btn-danger ml-4 my-4">Danger</button> */}
 </>);
{/* <React.StrictMode>
    <App />
  </React.StrictMode> */}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
