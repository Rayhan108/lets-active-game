// routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import PrivetRoutes from "./privetRoutes";
import Main from "@/layout/Main";
import DashboardPage from "@/pages/DashboardPage/DashboardPage";

import Avatar from "@/pages/Avatar/Avatar";
import ReferralRewards from "@/pages/ReferralRewards/ReferralRewards";
import Ads from "@/pages/Ads/Ads";
import Admin from "@/pages/Admin/Admin";
import Privacy from "@/pages/Privacy/Privacy";
import Terms from "@/pages/Terms/Terms";
import Contact from "@/pages/Contact/Contact";
import Faq from "@/pages/Faq/Faq";
import { AllUsers } from "@/pages/AllUsers/AllUsers";







// Auth Routes (Public)
const authRoutes = [
//   { path: "/sign-in", element: <Login /> },
//   { path: "/verify", element: <Otp /> },
//   { path: "/forgotPass", element: <ForgotPass /> },
//   { path: "/setPass", element: <SetPass /> },
];

// Dashboard Routes (Private)
const dashboardRoutes = [
  { index: true, element: <DashboardPage /> },
  { path: "allUsers", element: <AllUsers/> },
  { path: "avatar", element: <Avatar /> },
  { path: "referralRewards", element: <ReferralRewards /> },
  { path: "ads", element: <Ads /> },
  { path: "admin", element: <Admin /> },


];

// Settings Routes
const settingRoutes = [
  { path: "settings/privacy", element: <Privacy /> },
  { path: "settings/terms", element: <Terms /> },
  { path: "settings/contact", element: <Contact /> },
  { path: "settings/faq", element: <Faq /> },
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