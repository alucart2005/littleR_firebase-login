import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
      </div>
    </div>
  );
}
