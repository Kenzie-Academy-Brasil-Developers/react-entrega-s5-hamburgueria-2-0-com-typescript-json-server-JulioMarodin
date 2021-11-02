import { ButtonStyle } from "./styles";

const Button = ({ children, color, ...rest }: any) => {
  return (
    <ButtonStyle color={color} {...rest}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
