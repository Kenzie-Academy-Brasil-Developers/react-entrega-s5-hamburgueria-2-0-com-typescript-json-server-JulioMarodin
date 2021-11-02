import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { CartProvider } from "./Cart";
import { ProductsProvider } from "./Products";

interface props {
  children: ReactNode;
}

const Providers = ({ children }: props) => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>{children}</CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
};

export default Providers;
