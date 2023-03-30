import Head from 'next/head'
import Image from 'next/image'
import { BsMoon } from 'react-icons/bs'
import { Switch } from '@chakra-ui/react'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);
  const [word, setWord] = useState('');

  const toggleDarkMode = () => {
    console.log('before toggleDarkMode ', darkMode);
    setDarkMode(!darkMode);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <>
      <Head>
        <title>Dictionary App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='pt-14 container mx-auto'>
        <div className='flex justify-between mx-20'>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38"><g fill="none" fillRule="evenodd" stroke="#838383" strokeLinecap="round" strokeWidth="1.5"><path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28"></path><path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8"></path><path d="M11 9h12"></path></g></svg>
        </div>
        <div className='flex gap-6'>
          <Switch colorScheme='purple' size='lg' isChecked={darkMode} onChange={toggleDarkMode}></Switch>
          <BsMoon  className="text-gray-500" size={28}/>
        </div>
        </div>
        <div className='mt-14'>
          <form onSubmit={handleSubmit} className='flex justify-center'>
            <div className='relative'>
            <input value={word} onChange={(e) => setWord(e.target.value)} type="text" className='placeholder-gray-400 font-bold text-black/70 text-xl border rounded-xl py-4 px-80 bg-gray-100 focus:border-purple-600 focus:outline-none' placeholder='Search for a word..'></input>
              <span className='absolute top-0 bottom-0 right-0 flex items-center pr-4'>
                <AiOutlineSearch color={'#9333EA'} size={23} className='text-gray-400' />
              </span>
            </div>
        </form>
        </div>
        <div>
          <h1>{word}</h1>
        </div>
      </main>
    </>
  )
}
