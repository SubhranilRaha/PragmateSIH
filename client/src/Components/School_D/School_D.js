import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import Bottomobnav from "../Dashboard_Components/Navigation/bottomobnav";
import Dashtopnav from "../Dashboard_Components/Navigation/dashtopnav";
import Sidebar from "../Dashboard_Components/Navigation/Sidebar";
import AuthWrapper from "../LogIn/AuthWrapper";
import { useWindowSize } from "../../utils/useWindowSise";
import {
  UilEstate,
  UilGraduationCap,
  UilPodium,
  UilPresentationLinesAlt,
} from "@iconscout/react-unicons";
import AddTeacherForm from "../Dashboard_Components/Forms/AddTeacherForm";
import AddStudentForm from "../Dashboard_Components/Forms/AddStudentForm";
import AddAcademicPathForm from "../Dashboard_Components/Forms/AddAcademicPathForm";
import { useQuery } from "react-query";
import { getClassroom, getStudent, getTeacher } from "../../api/schoolReq";
import AddStudentToClassForm from "../Dashboard_Components/Forms/AddStudentToPath";
import AddTeacherToClassForm from "../Dashboard_Components/Forms/AddTeacherToPath";
import Logout from "../Logout/Logout";

const School_Student = ({ schoolId }) => {
  const studentQuery = useQuery("teacher", getStudent);
  return (
    <div className="w-full overflow-y-auto">
      <div className="w-full -col">
        <h1 className="w-full text-3xl text-center">ADD NEW STUDENT :</h1>
        <AddStudentForm />
        <h1 className="w-full text-3xl text-center">ADD STUDENT TO CLASSROOM :</h1>
        <AddStudentToClassForm />
        <h1 className="w-full text-3xl text-center">EXISTING STUDENTS :</h1>
        {studentQuery.isFetching ? (
          <h1 className="w-full text-3xl text-center">LOADING...</h1>
        ) : (
          <div className="flex flex-col w-full max-w-xl p-10 m-10 mx-auto shadow-md sm:rounded-3xl">
            {studentQuery.data.map((student) => {
              return (
                <div className="w-full mb-10">
                  <h1 className="w-full m-2 text-2xl text-center">
                    UniqueId: {student._id}
                  </h1>
                  <h1 className="w-full m-2 text-2xl text-center">
                    Name: {student.name}
                  </h1>
                  <h1 className="w-full m-2 text-2xl text-center">
                    Class: {student.degree}
                  </h1>
                  <h1 className="w-full m-2 text-2xl text-center">
                    Section: {student.stream}
                  </h1>
                  <h1 className="w-full m-2 text-2xl text-center">
                    Roll Number: {student.rollNumber}
                  </h1>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const School_Teacher = ({ schoolId }) => {
  const teacherQuery = useQuery("teacher", getTeacher);
  return (
    <div className="w-full overflow-y-auto">
      <h1 className="w-full text-3xl text-center">THIS IS TEACHERS PAGE</h1>
      <div className="w-full -col">
        <h1 className="w-full text-3xl text-center">ADD NEW TEACHER</h1>
        <AddTeacherForm />
        <h1 className="w-full text-3xl text-center">ADD TEACHER TO CLASSROOM :</h1>
        <AddTeacherToClassForm />
        <h1 className="w-full text-3xl text-center">EXISTING TEACHERS :</h1>
        {teacherQuery.isFetching ? (
          <h1 className="w-full text-3xl text-center">LOADING...</h1>
        ) : (
          <div className="flex flex-col w-full max-w-xl p-10 m-10 mx-auto shadow-md sm:rounded-3xl">
            {teacherQuery.data.map((teacher) => {
              return (
                <div className="w-full mb-10">
                  <h1 className="w-full m-2 text-2xl text-center">
                    UniqueId: {teacher._id}
                  </h1>
                  <h1 className="w-full m-2 text-2xl text-center">
                    Name: {teacher.name}
                  </h1>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const School_Classroom = ({ schoolId }) => {
  const classQuery = useQuery("classroom", getClassroom);
  return (
    <div className="w-full overflow-y-auto">
      <h1 className="w-full text-3xl text-center">
        THIS IS CLASSROOM PAGE
      </h1>
      <div className="w-full -col">
        <h1 className="w-full text-3xl text-center">ADD NEW CLASSROOMS</h1>
        <AddAcademicPathForm />
        <h1 className="w-full text-3xl text-center">
          EXISTING CLASSROOMS :
        </h1>
        {classQuery.isFetching ? (
          <h1 className="w-full text-3xl text-center">LOADING...</h1>
        ) : (
          <div className="flex flex-col w-full max-w-xl p-10 m-10 mx-auto shadow-md sm:rounded-3xl">
            {classQuery.data.map((classroom) => {
              return (
                <div className="w-full mb-10">
                  <h1 className="w-full text-2xl text-center">
                    {classroom.subject}
                  </h1>
                  <h1 className="w-full text-2xl text-center">
                    Classroom Id: {classroom._id}
                  </h1>
                  {classroom.learningOutcomes.map((lo) => {
                    return (
                      <h1 className="w-full m-2 text-xl text-center">{lo}</h1>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const School_D_Inner = ({ currUser }) => {
  if (currUser.userType !== "School")
    window.location.assign("/" + currUser.userType + "_D");
  const schoolMenuList = [
    {
      id: 1,
      title: "Students",
      icon: <UilGraduationCap />,
      iconclass: "uil uil-graduation-cap",
    },
    {
      id: 2,
      title: "Teachers",
      icon: <UilPodium />,
      iconclass: "uil uil-podium",
    },
    {
      id: 3,
      title: "Classes",
      icon: <UilPresentationLinesAlt />,
      iconclass: "uil uil-presentation-lines-alt",
    },
  ];
  const [selected, setSelected] = useState(1);
  const size = useWindowSize();
  return (
    <div className="flex">
      {/* <Dashtopnav />
          <Bottomobnav /> */}
      {size.width >= 600 ? (
        <Sidebar
          menuList={schoolMenuList}
          username={currUser.userInfo.name}
          userType={currUser.userType}
          selected={selected}
          setSelected={setSelected}
        />
      ) : (
        <Dashtopnav />
      )}
      {selected === 1 && <School_Student schoolId={currUser._id} />}
      {selected === 2 && <School_Teacher schoolId={currUser._id} />}
      {selected === 3 && <School_Classroom schoolId={currUser._id} />}
      {size.width >= 600 ? (
        <></>
      ) : (
        <Bottomobnav
          menuList={schoolMenuList}
          menuOption={selected}
          setMenuOption={setSelected}
        />
      )}
    </div>
  );
};

const School_D = () => {
  return (
    <AuthWrapper>
      <School_D_Inner />
      <Logout />
    </AuthWrapper>
  );
};

export default School_D;
