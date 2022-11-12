import React from 'react';
import { Text, Center} from '@chakra-ui/react';
import './App.css'
import SearchInput from '../src/features/search/SearchInput';
import { Link, Outlet} from 'react-router-dom';

function App() {

  // If form is not submitted yet, display the search input 
  // Else, we keep the search input display and display the Grid data with the artists
  return (
      <div className='App'>
        <Center className='pt-4'>
          <Link to="/">
            <Text className="text-4xl font-bold text-center text-white" style={{fontFamily: "Lexend"}}>Discoverify</Text>
          </Link>
        </Center>
        <SearchInput/>
        <Outlet/>
      </div>
  );
}

export default App;
