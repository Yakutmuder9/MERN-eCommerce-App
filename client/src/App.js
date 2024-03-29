import "./styles/main.scss";
import { Routes, Route } from "react-router-dom";
import {
  SignUp,
  SignIn,
  ForgotPassword,
  ResetPassword,
  Layout,
  Home,
  About,
  Contact,
  Wishlist,
  Cart,
  Account,
  Checkout,
  Product,
  SingleProduct,
  Blog,
  CompareProduct,
  TearmCondition,
  PrivacyPolicy,
  ShippingPolicy,
  RefundPolicy,
  PageNotFound,
  PrivateRoutes,
} from "./pages/index";

const App = () => {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route path="/profile" element={<Account />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Checkout />} />
            <Route path="/payment" element={<Checkout />} />
            <Route path="/message" element={<Checkout />} />
          </Route>

          <Route path="/products" element={<Product />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/compare-prodcut" element={<CompareProduct />} />

          <Route path="/term-conditions" element={<TearmCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
