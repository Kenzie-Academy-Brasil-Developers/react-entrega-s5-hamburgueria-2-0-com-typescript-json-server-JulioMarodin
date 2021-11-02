import { useContext, useState } from "react";
import { Redirect } from "react-router";
import Bar from "../../Components/Bar/index";
import Card from "../../Components/Card/index";
import CardCart from "../../Components/CardCart/index";
import { ProductsContext } from "../../Providers/Products";
import { Container } from "./styles";

const Dashboard = () => {
  const { products } = useContext(ProductsContext);
  const [show, setShow] = useState(false);

  const close = () => {
    setShow(!show);
  };

  if (!localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Bar close={close} />
      <Container>
        {products.map((item, index) => {
          return <Card key={index} item={item as any} />;
        })}
      </Container>
      {show && <CardCart close={close} />}
    </div>
  );
};

export default Dashboard;
