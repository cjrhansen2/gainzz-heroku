import axios from 'axios';


const apiCalls = {

  //find ALL of the users exercises
  findAllByUserId: function(id) {
    return axios.get("/api/exercise/user/" + id)
  },

  //find ONE exercise detail
  findOne: function(id) {
    return axios.get('api/exercisedetails/' + id)
  },

  //populates all the details for one exercise
  populateExerciseDetails: function(id) {
      return axios.get('api/exercise/populate/' + id)
  },

  //youtube API call for Broscience
  broscience: function() {
    return axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=broscience&type=video&key=AIzaSyBeyYj9AHzrKsUh5vpUIithCK4hMWXDs2M')
  },

  //adds a new exercise
  addExercise: function(data) {
    console.log("HERE!")
    return axios.post('/api/exercise', data)
  },

  deleteExercise: function(id) {
    console.log("HERE!")
    return axios.delete('/api/exercise/' + id)
  },

  //add a detail to an exercise
  addDetail: function(data) {
    return axios.post('/api/exercisedetails', data)
  },

  //deletes a detail
  deleteDetail: function(id) {
    return axios.delete('/api/exercisedetails/' + id)
  }
};

export default apiCalls;
