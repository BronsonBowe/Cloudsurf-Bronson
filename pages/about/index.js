import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Hi my name is Bronson Bowe and I am a software engineer.</p>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </div>
  );
};
export default About;
