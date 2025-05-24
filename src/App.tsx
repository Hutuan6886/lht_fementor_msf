import './App.css'
import MultiForm from './components/MultiForm'
import HomeLayout from './layouts/HomeLayout'

function App() {

  return (
    <div className='w-full h-full 
                  flex flex-col justify-center
                  bg-[#F0F5FF]'>
      <div className='w-[70%] h-[80%] m-auto'>
        <HomeLayout >
          <MultiForm />
        </HomeLayout>
      </div>
    </div>
  )
}

export default App
