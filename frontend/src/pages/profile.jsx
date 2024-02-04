import { useParams } from "react-router-dom";
export function Profile() {
  let { id } = useParams();
  return <div>Profile {id}</div>;
}
