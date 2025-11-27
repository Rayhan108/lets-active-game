// routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import PrivetRoutes from "./privetRoutes";
import Main from "@/layout/Main";



// Auth Routes (Public)
const authRoutes = [
//   { path: "/sign-in", element: <Login /> },
//   { path: "/verify", element: <Otp /> },
//   { path: "/forgotPass", element: <ForgotPass /> },
//   { path: "/setPass", element: <SetPass /> },
];

// Dashboard Routes (Private)
const dashboardRoutes = [
//   { index: true, element: <DashboardPage /> },
//   { path: "userManagement", element: <UserManagement /> },
//   { path: "allOwner", element: <AllOwner /> },
//   { path: "allProviders", element: <AllProvider /> },

];

// Settings Routes
const settingRoutes = [
//   { path: "setting/updateProfile", element: <Profile /> },
//   { path: "setting/about", element: <About /> },
//   { path: "setting/privacy", element: <Privacy /> },
//   { path: "setting/terms", element: <Terms /> },
];

const router = createBrowserRouter([
  ...authRoutes,
  {
    path: "/",
    element: (
      <PrivetRoutes>
        <Main />
      </PrivetRoutes>
    ),
    children: [...dashboardRoutes, ...settingRoutes],
  },
]);

export default router;