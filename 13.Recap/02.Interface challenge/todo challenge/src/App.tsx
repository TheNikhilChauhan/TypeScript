import "./App.css";

function App() {
  return (
    <>
      <div>
        <Todo
          title="Go to Gym"
          description="Wake up at 5 in the morning"
          done={false}
        />
      </div>
    </>
  );
}

interface todoProps {
  title: string;
  description: string;
  done: boolean;
}

function Todo(props: todoProps) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h2>{props.done}</h2>
    </div>
  );
}
export default App;
