import { AppProvider } from "../context/AppContext";
import Component2 from "./Component2";

const Component1 = () => {
  return (
    <AppProvider>
      <Component2 />
    </AppProvider>
  );
};

export default Component1;
