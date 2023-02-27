import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Bottomobnav from "../Dashboard_Components/Navigation/bottomobnav";
import Dashtopnav from "../Dashboard_Components/Navigation/dashtopnav";
import Sidebar from "../Dashboard_Components/Navigation/Sidebar";
import Pathcard from "../Dashboard_Components/Cards/Pathcard";
import Areachart from "../Dashboard_Components/Charts/Areachart";
import Barchart from "../Dashboard_Components/Charts/Barchart";
import Linechart from "../Dashboard_Components/Charts/Linechart";
import Piechart from "../Dashboard_Components/Charts/Piechart";
import AuthWrapper from "../LogIn/AuthWrapper";
import { UilEstate, UilBookOpen, UilAward } from "@iconscout/react-unicons";
import AddCocurriculumForm from "../Dashboard_Components/Forms/AddCocurriculumForm";
import { getCocurrData } from "../../api/cocurrReq";
import { useQuery } from "react-query";
import { deleteCocurr } from "../../api/cocurrReq";
import { useWindowSize } from "../../utils/useWindowSise";
import Progresswrapper from "../Dashboard_Components/Progressbars/Progresswrapper";
import { getLearningPaths, updateLearningPath } from "../../api/learnPReq";
import Modulecard from "../Dashboard_Components/Cards/Modulecard";
import CocurricularItemCard from "../Dashboard_Components/Cards/CocurricularItemCard";
import { predictScore } from "../../api/predictionReq";
import MyChat from "../Dashboard_Components/Chatbot/ChatBot";

const Student_Home = ({ studentName, studentId, setSelected }) => {
  const lpQuery = useQuery(["learnpath", studentId], () =>
    getLearningPaths(studentId)
  );
  const cocurrQuery = useQuery(["cocurr", studentId], () =>
    getCocurrData(studentId)
  );
  const [predIsFetching, setPredIsFetching] = useState(false);
  const [predScore, setPredScore] = useState(0);
  const getPrediction = async () => {
    setPredIsFetching(true);
    let nCocurr = cocurrQuery.data.data.length;
    let nLP = lpQuery.data.learningPath.length;
    let avgScore = 0;
    for (let idx = 0; idx < nLP; idx++) {
      avgScore = avgScore + lpQuery.data.learningPath[idx].score * 100;
    }
    avgScore = avgScore / nLP;
    console.log("Avg Score" + avgScore + " nCocurr" + nCocurr);
    const res = await predictScore(avgScore, nCocurr);
    if (res.error) {
      window.alert("Something went wrong");
    } else {
      console.log("Predicted Result" + res);
      setPredScore(res);
    }
    setPredIsFetching(false);
  };
  useEffect(() => {
    getPrediction();
  }, [lpQuery, cocurrQuery]);

  return (
    <div className="w-full ">

      <div className="flex w-full flex-col">
        <div className="m-2 text-2xl font-semibold">Welcome, {studentName}</div>
        <div className="flex w-full flex-wrap justify-center">
          {lpQuery.isFetching ? (
            <h1 className="w-full text-3xl text-center">LOADING GRAPHS...</h1>
          ) : (
            <>
              <div className="flex justify-center w-screen lg:w-2/4">
                <Barchart
                  labels={lpQuery.data.learningPath.map((path) => {
                    return path.classroomId.subject;
                  })}
                  dataset={[
                    lpQuery.data.learningPath.map((path) => {
                      return path.score * 100;
                    }),
                  ]}
                  datasetLabels={["Learning Path Score"]}
                  colors={[["#ff9900", "#f45502"]]}
                />
              </div>
              <div className="flex justify-center w-full lg:w-2/4">
                <Areachart
                  labels={lpQuery.data.learningPath.map((path) => {
                    return path.classroomId.subject;
                  })}
                  dataset={[
                    lpQuery.data.learningPath.map((path) => {
                      return path.score * 100;
                    }),
                  ]}
                  datasetLabels={["Learning Path Score"]}
                  colors={[["#ff9900", "#f45502"]]}
                />
              </div>
              <div className="flex justify-center w-full">
                <Linechart
                  labels={lpQuery.data.learningPath.map((path) => {
                    return path.classroomId.subject;
                  })}
                  dataset={[
                    lpQuery.data.learningPath.map((path) => {
                      return path.score * 100;
                    }),
                  ]}
                  datasetLabels={["Learning Path Score"]}
                  colors={[["#ff9900", "#f45502"]]}
                />
              </div>
            </>
          )}
          {/* <Piechart
            labels={["Games", "Dance", "Art", "WE"]}
            dataset={[[20, 40, 10, 30]]}
            colors={[
              ["rgb(230,206,247)", "rgb(247,15,225)", "#b0d980", "#83de14"],
            ]}
          /> */}
        </div>
        <div className="flex justify-center w-full">
          {cocurrQuery.isFetching || predIsFetching ? (
            <h1 className="w-full text-3xl text-center">
              LOADING PREDICTION...
            </h1>
          ) : (
            <h1 className="w-full text-3xl text-center">
              <div className="flex items-center justify-center">

                <div className="m-3 flex w-fit items-center rounded-lg bg-alt p-2">
                  <span className="p-2"> Overall Performance Score: </span>
                  <div className="rounded-lg bg-white">
                    <Progresswrapper
                      type="circular"
                      progressVal={predScore}
                      time={20}
                      strokeSize={3}
                      containerSize={100}
                      color="orange"
                    />
                  </div>
                </div>
              </div>
            </h1>
          )}

          {/* <div className="flex flex-wrap justify-around gap-3">
          {lpQuery.isFetching ? (
            <h1 className="w-full text-3xl text-center">LOADING PATHS...</h1>
          ) : (
            <>
              {lpQuery.data.learningPath.map((path) => {
                return (
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setSelected(2);
                    }}
                  >
                    <Pathcard
                      completion={path.score * 100}
                      title={path.classroomId.subject}
                    />
                  </div>
                );
              })}
            </>
          )} */}
        </div>
      </div>
    </div>
  );
};

const Student_LearnPath = ({ studentId }) => {
  const lpQuery = useQuery(["learnpath", studentId], () =>
    getLearningPaths(studentId)
  );
  const handleUpdate = async (idx) => {
    console.log("Response sent: "+lpQuery.data.learningPath[idx]);
    const resData = await updateLearningPath(lpQuery.data.learningPath[idx]);
    if (resData.error) {
      window.alert(resData.error);
    }
  };
  return (
    <div className="w-full overflow-y-auto">
      {lpQuery.isFetching ? (
        <h1 className="w-full text-3xl text-center">LOADING PATHS...</h1>
      ) : (
        <div className="flex flex-col w-full">
          {console.log(lpQuery.data)}
          <div className="m-2 text-2xl font-semibold">Learning Path</div>
          {lpQuery.data.learningPath.map((path, i) => {
            console.log(path);
            return (
              // <div className="w-full m-auto shadow:lg rounded-xl" key={i}>
              //   <h1>Path Name: {path.classroomId.subject}</h1>
              //   <Progresswrapper
              //     type="linear"
              //     progressVal={path.score * 100}
              //     time={50}
              //     strokeSize={20}
              //     containerSize={100}
              //     fontSize={16}
              //     color="green"
              //   />
              //   <>
              //   {
              //     path.learningOutcomes.map((lo, j) => {
              //       return (
              //         <div key={j}>
              //           <label htmlFor={lo.name}>{lo.name}</label>
              //           <input
              //             type="checkbox"
              //             id={lo.name}
              //             defaultChecked={lo.isDone}
              //             disabled={lo.isDone}
              //             onChange={(e) => {
              //               lpQuery.data.learningPath[i].learningOutcomes[j].isDone = e.target.checked; // true or false
              //             }}
              //           />
              //         </div>
              //       )
              //     })
              //   }
              //   </>
              //   <button onClick={() => handleUpdate(i)} >SUBMIT</button>
              // </div>
              <div className="flex w-full lg:items-start">
                <Modulecard
                  learningPath={path}
                  percent={path.score * 100}
                  key={i}
                  lpQuery={lpQuery}
                  i={i}
                  handleUpdate={handleUpdate}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// const Student_CocurrCard = ({ data, delCocurr }) => {
//   return (
//     <div className="flex flex-col w-full max-w-xl mx-auto my-10 shadow-lg rounded-xl">
//       <h1><b>Name:</b> {data.name}</h1>
//       <h1><b>Description:</b> </h1>
//       <p>{data.description}</p>
//       <button onClick={() => { delCocurr(data.name, data.studentId) } }>Delete</button>
//     </div>
//   )
// }

const Student_Cocurricular = ({ studentId }) => {
  // console.log('In student cocurricular');
  // console.log(studentId);
  const cocurrQuery = useQuery(["cocurr", studentId], () =>
    getCocurrData(studentId)
  );
  const delCocurr = async (name, studentId) => {
    const resData = await deleteCocurr({
      name: name,
      studentId: studentId,
    });
    if (resData.error) {
      window.alert(resData.error);
    } else {
      window.alert("Cocurricular Activity Deleted!");
    }
  };
  return (
    <div className="flex-col items-center justify-center w-full overflow-y-auto">
      <AddCocurriculumForm studentId={studentId} />
      {cocurrQuery.isFetching ? (
        <h1 className="w-full text-3xl text-center">LOADING... </h1>
      ) : (
        <>
          <h1 className="flex flex-col w-full max-w-xl px-3 mx-auto mt-5 mb-2">
            <b>Number of cocurricular activities: {cocurrQuery.data.total}</b>
          </h1>
          {cocurrQuery.data.data.map((cocurr, idx) => {
            console.log(cocurr);
            return (
              // <Student_CocurrCard key={idx} data={cocurr} delCocurr={delCocurr} />
              <CocurricularItemCard
                key={idx}
                data={cocurr}
                delCocurr={delCocurr}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

const Student_D_Inner = ({ currUser }) => {
  console.log(currUser.userInfo.name);
  if (currUser.userType !== "Student")
    window.location.assign("/" + currUser.userType + "_D");
  const studentMenuList = [
    {
      id: 1,
      title: "Home",
      icon: <UilEstate />,
      iconclass: "uil uil-estate",
    },
    {
      id: 2,
      title: "LearningPaths",
      icon: <UilBookOpen />,
      iconclass: "uil uil-book-open",
    },
    {
      id: 3,
      title: "CoCurriculars",
      icon: <UilAward />,
      iconclass: "uil uil-award",
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
          menuList={studentMenuList}
          userType={currUser.userType}
          selected={selected}
          setSelected={setSelected}
        />
      ) : (
        <Dashtopnav />
      )}
      <div className={`flex w-full ${size.width >= 600 ? "" : "my-12"}`}>
        {selected === 1 && (
          <Student_Home
            studentName={currUser.userInfo.name}
            studentId={currUser._id}
            setSelected={setSelected}
          />
        )}
        {selected === 2 && <Student_LearnPath studentId={currUser._id} />}
        {selected === 3 && <Student_Cocurricular studentId={currUser._id} />}
      </div>
      {size.width >= 600 ? (
        <></>
      ) : (
        <Bottomobnav
          menuList={studentMenuList}
          menuOption={selected}
          setMenuOption={setSelected}
        />
      )}
      <div className="bg-transparent">
        <MyChat />
      </div>
    </div>
  );
};

const Student_D = () => {
  return (
    <AuthWrapper>
      <Student_D_Inner />
    </AuthWrapper>
  );
};

export default Student_D;
