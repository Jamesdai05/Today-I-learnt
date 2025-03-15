import { useEffect, useState } from 'react';
import './App.css'
import Form from './components/Form/Form.jsx';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import supabase from './config/supabaseClient.js';
import Loader from './components/Loader/Loader';


function App() {
  const [toggle,setToggle]=useState(false)
  // list of facts
  const [facts, setFacts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      let query = supabase.from("Facts").select("*");

      if (currentCategory !== "all")
        query = query.eq("category", currentCategory);

      const { data, error } = await query.limit(100);

      if (error) {
        setFetchError("Unable to get the data");
        // console.log(error);
        setFacts(null);
      }
      if (data) {
        setIsLoading(false);
        // console.log(data);
        setFacts(data);
        setFetchError(null);
      }
    };
    fetchData();
  }, [currentCategory]);




  const handleToggle=()=>setToggle(prev=>!prev)

  return (
    <div className='App'>
      <Header toggle={toggle} handleClick={handleToggle}/>
      {toggle && <Form setFacts={setFacts}/>}

      {isLoading ? <Loader /> : facts.length>0  ? <Main setFacts={setFacts} facts={facts} setCurrentCategory={setCurrentCategory}/> : <p className='text-2xl text-center'>No fact in this category. You can add one 😊!</p>}
    </div>
  )
}

export default App
