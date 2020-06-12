import React from "react";
class MyFooter extends React.Component {
    render() {
       
        
        return (
            <div className="navbar fixed-bottom navbar-expand-sm w-100 d-flex justify-content-center ">
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 w-100 py-1">
            <div className="col"></div>
            <div className="col d-flex flex-column justify-content-center align-items-center">
            
               <div className="d-flex  justify-content-center align-items-center mb-1">
                  <a href="#" className="mr-4" ><i className="fa fa-random"></i></a>
                  <a href="#" className="mr-4"><i className="fa fa-fast-backward"></i></a>
                  <a href="#" className="mr-4"><i style={{fontSize: "2rem"}}  className="fa fa-play-circle"></i></a>
                  <a href="#" className="mr-4"><i className="fa fa-fast-forward"></i></a>
                  <a href="#" className="mr-4"><i className="fa fa-repeat"></i></a>
               </div>
               <div className="w-100 d-flex align-items-baseline">
                 <small className="mr-2">0.00</small>
                 <div className="progress w-100 mb-2" style={{height: "0.3rem"}}>
                  <div className="progress-bar w-75"  style={{backgroundColor: "#93A0B0"}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                 </div>
                 <small className="ml-2">45.00</small>
               </div>
               <div className="nav-bottom d-flex justify-content-between w-100 d-lg-none d-md-none border-top border-dark pt-2 mt-2">
                 <a href="/" className="d-flex flex-column text-center"><i className="fa  fa-home " style={{fontSize: "1.5rem"}}></i>Home</a>
                 <a href="#"className="d-flex flex-column text-center"><i className="fa  fa-search " style={{fontSize: "1.5rem"}}></i>Search</a>
                 <a href="#" className="d-flex flex-column text-center"><i className="fa   fa-book  " style={{fontSize: "1.5rem"}}></i>Library</a>
                 <a href="#" className="d-flex flex-column text-center"><i className="fab   fa-spotify" style={{fontSize: "1.5rem"}}></i>Premium</a>
              </div>
            </div>
           
            <div className="col d-flex justify-content-end align-items-center mt-2 ">
              <a href="#" className="pr-3"><i className=" fa fa-volume-up"></i></a>
              <div className="progress w-50" style={{height: "0.3rem"}}>
                <div className="progress-bar w-75"  style={{backgroundColor: "#93A0B0"}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>          
            </div>
        </div>
        
       </div>
         );
        };
};

export default MyFooter;