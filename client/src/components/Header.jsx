import React from 'react';
import { Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

function Header() {
  const location = useLocation(); // Use location to track the current path
  const path = location.pathname;

  return (
    <Navbar className='border-b-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Aji's
        </span>
        blog
      </Link>

      <form>
        <TextInput
          type='text'
          placeholder='Search'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>

      <button className='w-12 h-10 lg:hidden' type='button'>
        <AiOutlineSearch />
      </button>

      <div className='flex gap-2 md:order-2'>
        <button className='w-12 h-10 hidden sm:inline' type='button'>
          <FaMoon />
        </button>
        <Link to='/sign-in'>
          <button gradientDuoTone='purpletone' outline>
            Sign In
          </button>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link as='div' active={path === '/'}>
            <Link to='/'>Home</Link>
          </Navbar.Link>
          <Navbar.Link as='div' active={path === '/about'}>
            <Link to='/about'>About</Link>
          </Navbar.Link>
          <Navbar.Link as='div' active={path === '/projects'}>
            <Link to='/projects'>Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
