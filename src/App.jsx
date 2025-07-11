
import Hello from './Hello'
import Greet from './Greet';
import Counter from './Counter'
import ButtonClick from './ButtonClick';
import Welcome from './Welcome';
import UserList from './UserList';
import TodoList from './TodoList';
import SimpleForm from './SimpleForm';
import LoginForm from './LoginForm';
import EmailForm from './EmailForm';
import PostList from './PostList';

function App() {

  return (
    <div>
      <h1>Hello React</h1>
      <p>Welcome to my first app!</p>
      <Hello />
      <Greet name="sandesh" />
      <Greet name="React lerner" />
      <Counter />
      <ButtonClick />
      <Welcome isLoggedIn={true} />
      <Welcome isLoggedIn={false} />
      <UserList />
      <TodoList />
      <SimpleForm />
      <LoginForm />
      <EmailForm/>
      <PostList/>
    </div>
  );
}

export default App
