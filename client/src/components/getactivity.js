import { useDispatch } from 'react-redux'
import { deleteActivity } from '../features/acitivity/activitySlice'


function ActivityItem({ exercise, token }) {
  const dispatch = useDispatch()

  function deleteUserActivity(e) {
 
   e.preventDefault()
  
  dispatch(deleteActivity(exercise, token))
    
  }
   
  return (
    <div>
   <table>
  <tr>
    <th>Exercise Name</th><br/>
    <th>Duration</th><br/>
    <th>Date</th>
  </tr>
  <tr>
    <td>{exercise.description}</td>
    <td>{exercise.duration} minutes</td><br/>
    <td>{exercise.added}</td>
  </tr>
    </table>  
    <button  onClick={deleteUserActivity} className='close'>
        X
      </button>    
    </div>
  )
}

export default ActivityItem