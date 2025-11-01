import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AccountInfoPageFile } from "./Component/AccountInfoFile";
import { ChangePassword } from "./Component/ChangePasswordPage";
import { EditAccountInfoFile } from "./Component/EditAccountInto";
import DoughnutChartPage from "./OtherComponents/ChartPage";
import { CategoryFile } from "./pages/CategoryTable";
import { CategoryFormPage } from "./pages/CreateCategoryForm";
import { DisplayDashboardPage } from "./pages/MainDashboard";
import { MyTaskFile } from "./pages/MyTaskPage";
import { SignUpDiv } from "./pages/SignUpFile";
import { VitalTaskFile } from "./pages/VitalTaskFile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: DisplayDashboardPage,
  },
  {
    path: "/vital-task",
    Component: VitalTaskFile,
  },
  {
    path: "/my-task",
    Component: MyTaskFile,
  },
  {
    path: "/task-categories",
    Component: CategoryFile,
  },
  {
    path: "/category-form",
    Component: CategoryFormPage,
  },
  {
    path: "/account_info",
    Component: AccountInfoPageFile,
  },
  {
    path: "/change-password",
    Component: ChangePassword,
  },
  {
    path: "/edit-account-info",
    Component: EditAccountInfoFile,
  },
  {
    path: "/chart",
    Component: DoughnutChartPage,
  },
  {
    path: "/sign-up",
    Component: SignUpDiv,
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};
export default App;
