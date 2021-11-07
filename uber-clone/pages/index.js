import { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import map from './components/Map'
import Link from 'next/link'





export default function Home() {
 // useEffect(() => {

 //   const map = new mapboxgl.Map({
 //   container: "map",
 //   style: 'mapbox://styles/mapbox/streets-v11',
 //   center: [-99.29011, 39.39172],
 //   zoom: 3,
 //   })
 //   })
 
  return (
    <Wrapper >
    <Map />
    
    <ActionItems>
      
      <Header>
        <UberLogo src ="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
         
         <Profile>
          <Name>
            Guman Pratap
          </Name>
          <UserImage
          src="https://lh3.googleusercontent.com/ogw/ADea4I7Dxt5zwvYGkmLoCda4MG82STDz5KeoHypIiEworQ=s32-c-mo"
          />
            

         </Profile>


      </Header>
      <ActionButtons>
        <Link href="/search" >
     <ActionButton>
        <ActionButtonImage src="https://i.ibb.co/6NWzBJS/uberx.png" />
          Ride
        </ActionButton>
        </Link>
        <ActionButton>
         
          <ActionButtonImage src = "https://i.ibb.co/4jfxrFB/bike.png" />
          Wheels
        </ActionButton>
        <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/ZVBxK4x/uberschedule.png" />
          Reserved
        </ActionButton>
     </ActionButtons>
     <InputButtons>
     
        Where to?

     </InputButtons>
    </ActionItems>
    </Wrapper>
  )
}

const InputButtons = tw.div `
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 

`
const Wrapper = tw.div`
flex flex-col  h-screen
`

const ActionItems = tw.div`
flex-1 p-4
`

const Header = tw.div `
flex justify-between items-center
`

const UberLogo = tw.img `
h-28
`
const Map = tw.div `
`


const Profile = tw.div `
flex items-center 
`

const Name = tw.div`
mr-4 w-20  text-sm
`
const UserImage = tw.img `
h-12 w-12 rounded-full border-grey-200 p-px 
`

const ActionButtons = tw.div `
flex
`

const ActionButton = tw.div `
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition 
text-xl

`

const ActionButtonImage = tw.img`
h-3/5 cursor-pointer
`