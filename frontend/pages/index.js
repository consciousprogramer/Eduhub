import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { startClock } from '../actions'
import Examples from '../components/examples'

const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])

  return (
    <>
      <div className="" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: 'center' }}>
        <h1 className="">
          EduHub Frontend - It's not a dummy project!
        </h1>
      </div>
    </>
  )
}

export default Index
