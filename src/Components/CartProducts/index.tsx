import { useContext } from "react";
import { BiTrash } from "react-icons/bi";
import { Container } from "./styles";
import { CartContext } from "../../Providers/Cart";

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

export default function CardProducts({ item }: Props) {
  const { remove } = useContext(CartContext);

  return (
    <Container>
      <div className="data">
        <div className="image">
          <img src={item.image} alt="" />
        </div>
        <div className="quantity">
          <h3>{item.title}</h3>
          <div className="icons">
            <div>{item.quantity}</div>
          </div>
        </div>
      </div>
      <div className="mainTrash">
        <div className="trash">
          <BiTrash onClick={() => remove(item.id)} />
        </div>
      </div>
    </Container>
  );
}
