import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignUp from "./pages/Signup/Signup";
import SignIn from "./pages/SignIn/Signin";
import Homepage from './pages/Homepage/index';
import AllExercises from './pages/AllExercises/index';
import BroScience from './pages/BroScience/index';
import AddExerciseForm from './pages/AddExercise/index';
import ExerciseDetails from './pages/ExerciseDetails/index';
import './App.css';
import { useAuthTokenStore } from "./utils/auth";
import Footer from "./components/Footer";
import Musclegroups from "./pages/MuscleGroups/index"


function App() {

  useAuthTokenStore();

  return (
    <Router>
      <div className='appDiv'>
        <Switch>
          <Route exact path="/" component={SignUp}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path='/home' component={Homepage}/>
          <Route exact path='/broscience' component={BroScience} />
          <Route exact path='/workouts' component={AllExercises} />
          <Route exact path='/create' component={AddExerciseForm} />
          <Route exact path='/details' component={ExerciseDetails} />
          <Route exact path='/muscle' component={Musclegroups} />
        </Switch>
        <Footer/>
      </div>
  </Router>
  );
}

export default App;
