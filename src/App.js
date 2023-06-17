
import './App.css';
import Joke from './components/jokes';
import NavigationBar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <NavigationBar/>
      <ol>
      <Joke
        setup="You know why you never see elephants hiding up in trees?"
        punchline="Because they’re really good at it."/>
      <Joke
        setup="What do you call a parade of rabbits hopping backwards?"  
        punchline="A receding hare-line."/>
      <Joke
        setup="What do you call bears with no ears?"  
        punchline="B."/>
      <Joke
        setup="How do you make a tissue dance?"  
        punchline="You put a little boogie in it."/>
      <Joke
        setup="Why doesn’t the sun go to college?"  
        punchline="Because it has a million degrees!"/>
        </ol>
        <Footer/>
    </div>
  );
}

export default App;
