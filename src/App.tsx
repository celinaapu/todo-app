import { FC } from "react";
import {
  // Route,
  // BrowserRouter,
  // Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { MainDashboardPage } from "./pages/MainDashboard";
//import { SignUpDiv } from "./Component/SignUpFile";
import { TodoBirthdayPlan } from "./Component/TodoPages/TodoBirthdayPlan";
//import { RegisterForm } from "./Component/LoginFile";
//import { DashboardLayout } from "./layouts/DashboardLayout";
//import { MainDashboardPage } from "./pages/MainDashboard";
//import { MainDashboardPage } from "./Component/MainDashboard";
//import { DashboardWithModal } from "./Component/DashboardModal";
//import { ModalInvite } from "./OtherComponents/Modal.";
import { MyTaskFile } from "./pages/MyTaskPage";
import { VitalTaskFile } from "./pages/VitalTaskFile";
//import { NotifyModal } from "./OtherComponents/NotificationModal";
//import { CalenderModal } from "./OtherComponents/CalenderModal";
import { ChangePassword } from "./Component/ChangePasswordPage";
//import { AccountInfoPage } from "./Component/AccountInfoFile";
//import { NewTaskModal } from "./OtherComponents/NewTaskModal";
//import { EditTaskModal } from "./OtherComponents/EditTaskModal";
//import { TodoLayout } from "./layouts/TodoLayout";
//import { EditAccountInfoPage } from "./Component/EditAccountInto";
//import { CreateCategoryForm } from "./Component/CreateCategoryForm";
//import { TaskPriorityModal } from "./OtherComponents/TaskFormModal";
//import { RegisterForm } from "./Component/LoginFile";
//import { SignUpDiv } from "./Component/SignUpFile";
import { DisplayDashboardPage } from "./pages/MainDashboard";
import { CategoryFile } from "./pages/CategoryTable";
import { CategoryFormPage } from "./Component/CreateCategoryForm";
import { AccountInfoPageFile } from "./Component/AccountInfoFile";
import { EditAccountInfoFile } from "./Component/EditAccountInto";

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
    path: "/birthday-plan",
    Component: TodoBirthdayPlan,
  },
]);

const App: FC = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" Component={} />
    //     <Route path="/vital-task" Component={VitalTaskFile} />
    //     <Route path="/my-task" Component={MyTaskFile} />
    //     <Route path="/task-categories" Component={CategoryFile} />
    //     <Route path="/category-form" Component={CategoryFormPage} />
    //     {/* <Route path="/acctount-info" Component={AccountInfoPageFile} /> */}
    //     <Route path="/account_info" element={<AccountInfoPageFile />} />
    //     <Route path="/change-password" element={<ChangePassword />} />
    //     <Route path="/edit-account-info" element={<EditAccountInfoFile />} />
    //     {/* <Route path="/:id/:type" Component={SingleView} /> */}
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
};
export default App;
