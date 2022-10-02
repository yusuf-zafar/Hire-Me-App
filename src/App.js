import CardList from "./CardList";
import SearchUser from "./SearchUser";
import { useState, useEffect } from "react";

function App() {
    const [url, seturl]= useState([])
    const [pageNo, setPageNo] = useState(1);
    const pagesize = 8;
    const [profiles, setProfiles] = useState([]);
    const [isLoading, setIsLoading] = useState(true)


    const prevPage = ()=>{
      const num = pageNo - 1;
      if(num>0){
      const start = (num * pagesize)-pagesize;
      const end = start + pagesize;
      setPageNo(num);
      setProfiles(url.slice(start, end));}
    }
    const nextPage = ()=>{
      const num = pageNo + 1;           
      if(num < url.length/pagesize+1){ 
      const start = (num * pagesize)-pagesize; 
      const end = start + pagesize;     
      setPageNo(num);                 
      setProfiles(url.slice(start, end));}
    }

<div>
  <button onClick={prevPage}>Prev</button>
  <button onClick={nextPage}>Next</button>
</div>

  useEffect(()=>{
    function fetchUsers(){
      fetch('http://localhost:3000/test-data.json')
      .then(res=>res.json())
      .then(data=>{
        setIsLoading(false);
        seturl(data);
        setProfiles(data.slice(pageNo-1, pagesize))
      });
    }
    fetchUsers();
  },[]);

    const searchUser = search => {
      if (search !==''){
        setProfiles(url.filter(user=>{
          return user.username.toLowerCase().includes(search.toLowerCase()) ||
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.profession.toLowerCase().includes(search.toLowerCase())
        }));}else if(search===""){
          setProfiles(url.slice(0,8))
          setPageNo(1)
        }
    };

  return (
    <>
    <h1 className='main'>Hire Me App</h1>
    <h3 className='main'>Hire a professional now!</h3>
    <div style={{marginBottom: '4px'}}>
    <SearchUser onSearch={searchUser} />
    <h4 className='main'>(search users by 'name', 'id' or 'profession')</h4>
    <div style={{textAlign:"center"}}>
    <button style={{borderRadius:'5px'}} onClick={prevPage}>Prev</button> Page: {pageNo} <button style={{borderRadius:'5px'}} onClick={nextPage}>Next</button>
    </div>
    </div>
    {isLoading ? 'Loading...': <CardList profiles={profiles}/>}
    </>
  );
}

export default App;
