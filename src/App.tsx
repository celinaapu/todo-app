//import { SignUpDiv } from "./Component/SignUpFile";
import { FC } from "react";
//import { TodoBirthdayPlan } from "./Component/TodoPages/TodoBirthdayPlan///";////
//import { RegisterForm } from "./Component/LoginFile";
//import { DashboardLayout } from "./layouts/DashboardLayout";
//import { MainDashboardPage } from "./pages/MainDashboard";
//import { MainDashboardPage } from "./Component/MainDashboard";
//import { DashboardWithModal } from "./Component/DashboardModal";
//import { ModalInvite } from "./OtherComponents/Modal.";
//import { MyTask } from "./Component/MyTaskPage";
//import { VitalTaskPage } from "./Component/VitalTaskFile";
//import { NotifyModal } from "./OtherComponents/NotificationModal";
//import { CalenderModal } from "./OtherComponents/CalenderModal";
//import { ChangePassword } from "./Component/ChangePasswordPage";
//import { AccountInfoPage } from "./Component/AccountInfoFile";
//import { NewTaskModal } from "./OtherComponents/NewTaskModal";
//import { EditTaskModal } from "./OtherComponents/EditTaskModal";
import { TodoLayout } from "./layouts/TodoLayout";
//import { EditAccountInfoPage } from "./Component/EditAccountInto";/////
import { CategoryTable } from "./Component/CategoryTable";

const App: FC = () => {
  return (
    <div className="flex flex-row ">
      <div className="h-screen  w-screen">
        <TodoLayout component={<CategoryTable />} />
      </div>
    </div>
  );
};
export default App;
