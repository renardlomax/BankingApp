function Spa() {
  return (
    <HashRouter>
      <NavBar/>
     <div id="data">


     <UserContext.Provider value={{users:[{name:'Renard Lomax',email:'renardlomax1990@gmail.com',password:'secret',balance:900}]}}>
        <div className="container" style={{padding: "20px" }}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
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
