import React from 'react';
import { Text, Center, Heading} from '@chakra-ui/react';
import './App.css'
import SearchInput from '../src/features/search/SearchInput';
import { Link, Outlet} from 'react-router-dom';

function App() {

  // If form is not submitted yet, display the search input 
  // Else, we keep the search input display and display the Grid data with the artists
  return (
      <div style={{background: "#121212"}} className=' min-h-screen flex flex-col justify-center'>
        <main>
          <Heading as="h1" size="3xl" className=' text-white text-center' style={{fontFamily: "Lexend"}}>
            Discover your new artists and music
          </Heading>
        <Center className='pt-4'>
          <Link to="/">
            <Text className="text-3xl font-bold text-white" style={{fontFamily: "Lexend"}}>Discoverify</Text>
          </Link>
        </Center>
        <SearchInput/>
        <Outlet/>
        </main>
      </div>
  );
}

export default App;
