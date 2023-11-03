import { useEffect, useState } from "react";
import { store } from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import LandingPage from "./Views/LandingPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      // {
      //   path: "team",
      //   element: <Team />,
      //   loader: teamLoader,
      // },
    ],
  },
]);
function App() {
  const [count, setCount] = useState(0);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
