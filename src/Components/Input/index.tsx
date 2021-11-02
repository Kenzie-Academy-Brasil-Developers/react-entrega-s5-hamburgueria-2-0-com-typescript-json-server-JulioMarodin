import { InputStyle, Span } from "./styles";

const Input = ({ register, name, error, ...rest }: any) => {
  return (
    <>
      <InputStyle isErrored={!!error} {...register(name)} {...rest} />
      <Span>{!!error && <span>{error}</span>}</Span>
    </>
  );
};

export default Input;
