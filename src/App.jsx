import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import BaseTemplate from "./BaseTemplate";
import SignupForm from "./SignupForm";

import GetOneTour from "./GetOneTour";
import { Toaster } from "react-hot-toast";
import { MyProvider } from "./context/MyContext";
import Account from "./Account";

function App() {
  // const { isLoading, user } = useLoggedIn();
  // console.log("HA MAJHA USER", user);

  return (
    <>
      <MyProvider>
        <Router>
          <Routes>
            <Route path="/" element={<BaseTemplate />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/tour/:tourName" element={<GetOneTour />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Router>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "18px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </MyProvider>
    </>
  );
}

export default App;
