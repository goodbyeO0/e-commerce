import Image from 'next/image'
import Link from 'next/link'
import Data from './data'
import Navbar from './components/navbar'


export default function Home() {

  return (
    <div>
      <Navbar />
      <Data />
    </div>
  )
}
