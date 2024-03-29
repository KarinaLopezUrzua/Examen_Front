import Card from "../Components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [user, setUsers] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios.get(url).then((res) => setUsers(res.data));
  }, []);

  return (
    <main className="">
      <h1> 😁 Sonrisas Saludables: Dentistry Clinic </h1>
      <div className="contenedorPagina">
        <h5>
          "At 'Sonrisas Saludables', we are dedicated to caring for your dental
          health with passion and commitment. Our team of dental experts is here
          to provide you with personalized, quality care, focused on your needs
          and dental well-being. From preventive cleanings to advanced
          treatments, we are committed to keeping your teeth and gums healthy so
          you can enjoy a radiant smile and optimal dental health."
        </h5>
      </div>

      <div className="card-grid">
        {user.map((info) => (
          <Card key={`${info.id}`} info={info} buttonType="Add Fav" />
        ))}
      </div>
    </main>
  );
};

export default Home;
