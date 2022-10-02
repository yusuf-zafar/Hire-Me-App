import { useState } from "react";


function SearchUser(props) {

    let [search, setSearch] = useState('');

    let handleSubmit = e => {
        e.preventDefault();
        props.onSearch(search)
    };

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' value={search} onChange={e=>setSearch(e.target.value)} placeholder='Type here'/>
        <button style={{borderRadius:'5px'}}>Search</button>
    </form>
  );
}

export default SearchUser