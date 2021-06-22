function NavBar(){
  return(
   
    <>
     
    <div id="tab" className="text-center">
    <button type="button" type =""class="btn btn-lg btn-danger" data-bs-toggle="popover" title="" data-bs-content="And here's some amazing content. It's very engaging. Right?">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="btn btn-outline-danger" data-toggle="tooltip" data-placement="top" title="Home Button" href="#/">Home</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-outline-danger" data-toggle="tooltip" data-placement="top" title="Create A User Account" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-outline-danger" data-toggle="tooltip" data-placement="top" title="Login To Your Account" href="#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-outline-danger" data-toggle="tooltip" data-placement="top" title="Deposit Cash" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-outline-danger" data-toggle="tooltip" data-placement="top" title="Withdraw Cash" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-outline-danger" data-toggle="tooltip" data-placement="top" title="View User Data" href="#/alldata/">AllData</a>
          </li>          
        </ul>
        
      </div>
      
    </nav>
    
    </button>
   
    </div>
    </>
  );
}