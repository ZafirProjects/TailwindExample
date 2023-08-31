import charityImage from "../assets/Vision-Mission-Hero-2400x1600.jpg";

export default function HomeImage() {
  return (
    <div className="container h-auto max-w-full">
      <img src={charityImage}></img>
      <div className="container bg-green-400">
        <h1>Donate to the KBKT Foundation</h1>
        <p>A charity dedicated to helping Bangladesh</p>
        <a>
          <span>Donate Now</span>
        </a>
      </div>
    </div>
  );
}
