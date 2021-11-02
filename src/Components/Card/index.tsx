import { useContext, useState } from "react";
import { CartContext } from "../../Providers/Cart";
import Button from "../Button/index";
import { Container } from "./styles";

interface ItemData {
  title: string;
  type: string;
  price: number;
  image: string;
  userId: number;
  id: number;
  quantity: number;
  total: number;
}

interface Props {
  item: ItemData;
}

const Card = ({ item }: Props) => {
  const { addCart } = useContext(CartContext);
  const [des, setDes] = useState(false);

  const disable = () => {
    setDes(true);
    setTimeout(() => setDes(false), 2000);
  };

  return (
    <Container>
      <div>
        <img src={item.image} alt="" />
      </div>
      <div>
        <h3>{item.title}</h3>
        <p>{item.type}</p>
        <h4>
          {item.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h4>
        <div>
          <Button
            disabled={des}
            color={true}
            onClick={() => {
              addCart({ ...item, quantity: 1, total: item.price });
              disable();
            }}
          >
            Adicionar
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Card;
