// import logo from "./src/resources/Yup.jpeg";
// import "./App.css";
import Image from "next/image";
import { ImgBronson } from "../../resources";
import Link from "next/link";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ textAlign: "center" }}> Bronson Bowe</h1>
        <Image
          src={ImgBronson}
          style={{
            width: 300,
            height: 300,
            borderRadius: 300 / 2,
          }}
        />
        <p>No projects yet lol</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </header>
    </div>
  );
}

export default App;
