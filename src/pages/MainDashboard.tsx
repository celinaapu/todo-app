import { FC } from "react";
import OneOwnPhoto from "../assets/images/avatars.jpg";
import TwoOwnPhoto from "../assets/images/Pdownload.jpg";
import ThirdOwnPhoto from "../assets/images/Pimages.jpg";
import FourOwnPhoto from "../assets/images/Prdownload.jpg";
import FifthOwnPhoto from "../assets/images/ptdownload.jpg";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { TbCalendarStats } from "react-icons/tb";
import { BiTask } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import BirthdayPartyPlan from "../assets/images/birthdayparty.png";
import DesignPlan from "../assets/images/DesignImage.jpg";
import PresentationPlan from "../assets/images/PresentationImage.jpg";
import ToWalkADog from "../assets/images/WalkingDogImage.jpg";
import ToMeetImage from "../assets/images/MeetingImages.jpg";
import FirstChart from "../assets/images/Group 17.png";
import SecondChart from "../assets/images/Group 16.png";
import ThirdChart from "../assets/images/Group 15.png";
import { AiOutlineFileDone } from "react-icons/ai";
import { ModalInvite } from "../OtherComponents/ModalInvite.";
import { useState } from "react";
import { NewTaskModal } from "../OtherComponents/NewTaskModal";
import { MainDashbutton, Priority, Status } from "../Component/Maindashbutton";

export const MainDashboardPage: FC = () => {
  const [toOpenMoal, setModaltoOpen] = useState<boolean>(false);
  const openModal = () => setModaltoOpen(true);
  const closeModal = () => setModaltoOpen(false);

  const [showTaskModal, setTaskModaltoOpen] = useState<boolean>(false);
  const openTaskModal = () => setTaskModaltoOpen(true);
  const closeTaskModal = () => setTaskModaltoOpen(false);

  return (
    <div className="w-[100%] h-screen">
      <header className=" flex flex-row">
        <div className=" flex flex-row flex-grow">
          <div className="flex flex-row font-md text-2xl w-[70%] h-12 ">
            <h1 className=""> Welcome back, </h1>
            <p className="pl-2">Sundar👋</p>
          </div>
          <div className="flex flex-row w-30% h-12">
            <div className="h-8 flex flex-row flex-grow mt-4">
              <img className="rounded-md w-8 ml-2" src={OneOwnPhoto} />
              <img className="rounded-md w-8 ml-2" src={TwoOwnPhoto} />
              <img className="rounded-md w-8 ml-2" src={ThirdOwnPhoto} />
              <img className="rounded-md w-8 ml-2" src={FourOwnPhoto} />
              <img className="rounded-md w-8 ml-2" src={FifthOwnPhoto} />
            </div>
            <div className=" border border-red-400 h-8 w-20 ml-6 pl-2 mt-4 flex rounded-md justify-center items-center flex-row">
              <button
                onClick={openModal}
                className="text-red-400 flex text-sm w-full flex-row"
              >
                <AiOutlineUsergroupAdd /> Invite
              </button>
              {toOpenMoal && <ModalInvite onClose={closeModal} />}
            </div>
          </div>
        </div>
      </header>
      <div>
        <div className="w-[100%] h-screen border-4 gap-10 mt-10 flex flex-row">
          <div className="w-1/2 ml-5 mt-5">
            <div className="border-shadow w-full flex flex-row flex-grow">
              <div className="flex flex-row items-center ">
                <button>
                  <TbCalendarStats className="text-gray-400" />
                </button>
                <p className="text-red-400 text-[10px] pl-1">To-Do</p>
              </div>
              <div className="flex flex-row  flex-grow items-center text-end justify-end ">
                <button onClick={openTaskModal} className="flex flex-row">
                  <IoIosAdd className="text-red-600" />
                  <p className="text-[10px] text-gray-400">Add Task</p>
                </button>
                {showTaskModal && <NewTaskModal onClose={closeTaskModal} />}
              </div>
            </div>
            <div className="justify-start text-start flex flex-row text-[10px]">
              <p>20 June</p>
              <p className="text-gray-400 pl-2">.Today</p>
            </div>
            <div>
              <MainDashbutton
                title="Attend Nischal's Birthday Party"
                description="Buy gifts on the way and pick up cake from the bakery,(6 pm
                    |Fresh Elements)......"
                circleColor="#ff0000"
                priority={Priority.moderate}
                status={Status.notStarted}
                imageLink={BirthdayPartyPlan}
              />
              <MainDashbutton
                title="Landing Page Design For TravelingDays"
                description=" get the work done by EOD and discuss with client before
                    leaving.[4pm|Meeting]"
                imageLink={DesignPlan}
                priority={Priority.moderate}
                status={Status.inProgress}
                circleColor="#0000FF"
              />

              <MainDashbutton
                title="Presentation on Final Product"
                description="Make sure everything is functioning and the necessities are
                  properly met. Prepare the team and get the document ready
                  for..."
                circleColor="#ff0000"
                priority={Priority.moderate}
                status={Status.inProgress}
                imageLink={PresentationPlan}
              />
            </div>
          </div>
          <div className="w-1/2 mt-5 h-screen ml-5">
            <div className="text-center items-center flex flex-row ">
              <AiOutlineFileDone className="text-gray-400" />
              <p className="text-red-400 text-[10px]">Task Status</p>
            </div>
            <div className="text-start border-4 h-28 flex mt-5 pl-5 flex-row rounded-lg gap-8 ">
              <img src={FirstChart} />
              <img src={SecondChart} />
              <img src={ThirdChart} />
            </div>
            <div>
              <div className="flex flex-row items-center">
                <BiTask className="text-gray-400" />
                <p className="text-red-400 text-[8px] pl-1">Completed Task</p>
              </div>

              <MainDashbutton
                title="Walking the Dog"
                description="Take the dog to the park and bring threat as well."
                imageLink={ToWalkADog}
                status={Status.completed}
                circleColor="#00FF00"
                isCompleted={true}
              />
              <MainDashbutton
                title="Conduct Meeting"
                description="Meet with the clien and finalize requirements."
                imageLink={ToMeetImage}
                status={Status.completed}
                circleColor="#00FF00"
                isCompleted={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
