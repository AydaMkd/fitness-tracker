
 
import axios from 'axios'

const API_URL = "https://milestone-project2.herokuapp.com/api/activity/"

// Create new activity/workout
const createActivity = async (activityData, token) => {
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  }

  const response = await axios.post(API_URL + "add", activityData, config)
  
  return response.data
}
// Get userActivities
const getActivity = async (token) => {
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    }
  
    const response = await axios.get(API_URL + "exercise", config)
  
    return response.data
  }
  // Delete user activity
const deleteActivity = async (exercise, token) => {
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    }
  
    const response = await axios.delete( API_URL+ "delete/" + exercise._id, config)
    window.location.href = "/profile"
  
    return response.data
  }
  
const activityService = {
    createActivity,
    getActivity,
    deleteActivity
  }
  
  export default activityService