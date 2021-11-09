function Spa() {
  return (
    <HashRouter>
      <NavBar/>
     <div id="data">


     <UserContext.Provider value={{users:[{name:'Renard',email:'renardlomax1990@gmail.com',password:'secret',balance:9000},
                                  {name:'Bill',email:'Bill@gmail.com',password:'12345678',balance:300},
                                  {name:'Steve',email:'steve@gmail.com',password:'secret12',balance:7200
                                  },{name:'test',email:'test',password:'test',balance:7200
                                }]}}>
        
        
        \<div className="container" style={{padding: "20px" }}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
          {/* <Route path="/transfer/" component={Transfer} /> */}
        </div>
      </UserContext.Provider>  
      

     </div>
         
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
