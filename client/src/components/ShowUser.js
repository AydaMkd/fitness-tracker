import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ActivityItem from './getactivity'
import { getActivity, reset } from '../features/acitivity/activitySlice'


function ShowUser() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { exercises, isError, message } = useSelector(
    (state) => state.exercises
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }


    if (!user) {
      navigate('/')
    }

    dispatch(getActivity())
    console.log(exercises)

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])
  function anotherActivity(e){
    e.preventDefault()
    window.location.href = "/create"
   }

  return (
    <>
      <section className='heading'>
       <h3> Hello {user.user}!</h3>
      </section>
      <div>
      <h2>Workout Log</h2>
      </div>
      <section className='content'>
        {exercises.length > 0 ? (
          <div className='exercise'>
            {exercises.map((exercise) => (
              <ActivityItem key={exercise._id} exercise={exercise} />
            ))}
          </div>
        ) : (
          <p>You have not logged any data yet</p>
        )}
        <br></br>
        <div>
        <button className="btn btn-primary" onClick={anotherActivity}> Add activity</button>
      </div>
      </section>
      
    </>
  )
}
export default ShowUser;