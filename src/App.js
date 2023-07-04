import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './Components/Home'
import Jobs from './Components/Jobs'
import LoginForm from './Components/LoginForm'
import ProtectedRoute from './Components/ProtectedRoute'
import JobItemDetails from './Components/JobItemDetails'
import NotFound from './Components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />

    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
