import React from 'react';
import { Text } from '@chakra-ui/react';
import './App.css'
import SearchInput from '../src/features/search/SearchInput';
import { Link, Outlet} from 'react-router-dom';

function App() {

  // If form is not submitted yet, display the search input 
  // Else, we keep the search input display and display the Grid data with the artists
  return (
      <div className='App'>
        <Link to="/">
          <Text className="text-3xl font-mono font-bold mt-4 text-center">Discoverify</Text>
        </Link>
        <SearchInput/>
        <Outlet/>
      </div>
  );
}

export default App;
