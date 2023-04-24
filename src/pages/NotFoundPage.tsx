import { useLocation } from "react-router-dom";

export default function NotFoundPage() {

  const location = useLocation();

  return (
    <>
      <h1>404 Not Found</h1>
      <h2>'{location.pathname}' does not exist!</h2>
    </>
  );
}