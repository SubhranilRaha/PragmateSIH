import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Bottomobnav from '../Dashboard_Components/Navigation/bottomobnav'
import Dashtopnav from '../Dashboard_Components/Navigation/dashtopnav'
import AuthWrapper from '../LogIn/AuthWrapper'
import Sidebar from '../Dashboard_Components/Navigation/Sidebar'
import { UilEstate } from "@iconscout/react-unicons";
import { useWindowSize } from '../../utils/useWindowSise'
import { getStudentsData } from '../../api/teacherReq'
import { useQuery } from 'react-query'
import Areachart from "../Dashboard_Components/Charts/Areachart";
import Barchart from "../Dashboard_Components/Charts/Barchart";
import Linechart from "../Dashboard_Components/Charts/Linechart";
import Piechart from "../Dashboard_Components/Charts/Piechart";
import { predictScore } from "../../api/predictionReq";
import { getCocurrData } from "../../api/cocurrReq";
import { getLearningPaths } from "../../api/learnPReq";

const Student_Data = ({ studentId, studentName }) => {
  const lpQuery = useQuery(['learnpath', studentId], () => getLearningPaths(studentId));
  const cocurrQuery = useQuery(['cocurr', studentId], () => getCocurrData(studentId));
  const [predIsFetching, setPredIsFetching] = useState(false);
  const [predScore, setPredScore] = useState(0);
  const getPrediction = async () => {
    setPredIsFetching(true);
    let nCocurr = cocurrQuery.data.data.length;
    let nLP = lpQuery.data.learningPath.length;
    let avgScore = 0;
    console.log(lpQuery);
    for(let idx = 0; idx < nLP; idx++)
    {
      avgScore = avgScore + (lpQuery.data.learningPath[idx].score * 100);
    }
    avgScore = avgScore / nLP;
    console.log("Avg Score" + avgScore + " nCocurr" + nCocurr);
    const res = await predictScore(avgScore, nCocurr);
    if(res.error)
    {
      window.alert("Something went wrong");
    }
    else
    {
      console.log("Predicted Result"+res);
      setPredScore(res);
    }
    setPredIsFetching(false);
  }
  useEffect(() => {
    getPrediction();
  }, [lpQuery, cocurrQuery]);
  return (
    <div className="w-full overflow-y-auto">
      <div className="-col w-full m-5 shadow:lg">
        <h1 className="w-full text-center text-3xl">{studentName}</h1>
        <div className="flex w-full justify-center">
          {
            lpQuery.isFetching ?
            <h1 className="w-full text-center text-3xl">LOADING GRAPHS...</h1>
            :
            <>
            <Barchart
              labels={lpQuery.data.learningPath.map(path => { return path.classroomId.subject} )}
              dataset={[lpQuery.data.learningPath.map(path => { return (path.score * 100)} )]}
              datasetLabels={["Learning Path Score"]}
              colors={[
                ["rgb(230,206,247)", "rgb(247,15,225)"]
              ]}
            />
            <Areachart
              labels={lpQuery.data.learningPath.map(path => { return path.classroomId.subject} )}
              dataset={[lpQuery.data.learningPath.map(path => { return (path.score * 100)} )]}
              datasetLabels={["Learning Path Score"]}
              colors={[
                ["rgb(230,206,247)", "rgb(247,15,225)"]
              ]}
            />
            <Linechart
              labels={lpQuery.data.learningPath.map(path => { return path.classroomId.subject} )}
              dataset={[lpQuery.data.learningPath.map(path => { return (path.score * 100)} )]}
              datasetLabels={["Learning Path Score"]}
              colors={[
                ["rgb(230,206,247)", "rgb(247,15,225)"]
              ]}
            />
            </>
          }
          {/* <Piechart
            labels={["Games", "Dance", "Art", "WE"]}
            dataset={[[20, 40, 10, 30]]}
            colors={[
              ["rgb(230,206,247)", "rgb(247,15,225)", "#b0d980", "#83de14"],
            ]}
          /> */}
        </div>
        <div className="flex w-full justify-center">
          {
            (cocurrQuery.isFetching || predIsFetching) ?
            <h1 className="w-full text-center text-3xl">LOADING PREDICTION...</h1>
            :
            <h1 className="w-full text-center text-3xl">PREDICTED SCORE: {predScore}</h1>
          }
        </div>
      </div>
    </div>
  )
}

const Teacher_D_Inner = ({ currUser }) =>  {
  if(currUser.userType !== 'Teacher') window.location.assign("/"+currUser.userType+"_D")
  const studentQuery = useQuery(['student', currUser], () => getStudentsData(currUser));
  const teacherMenuList = [
    {
      id: 1,
      title: "Home",
      icon: <UilEstate />,
      iconclass: "uil uil-estate"
    }
  ];
  const [selected, setSelected] = useState(1);
  const size = useWindowSize();
  const removeDuplicate = () => {
    let exists = [];
    let uniq = [];
    for(let i=0; i<studentQuery.data.students.length; i++)
    {
      if(exists.includes(studentQuery.data.students[i]._id)) continue;
      exists.push(studentQuery.data.students[i]._id);
      uniq.push(studentQuery.data.students[i])
    }
    studentQuery.data.students = uniq;
  }
  return (
    <div className="flex">
        {/* <Dashtopnav />
          <Bottomobnav /> */}
        {
          size.width >= 600 ?
          <Sidebar 
            menuList={teacherMenuList} 
            username={currUser.userInfo.name} 
            userType={currUser.userType} 
            selected={selected}
            setSelected={setSelected}
          />
          :
          <Dashtopnav />
        }
        {
          (selected === 1) &&
          <div className="w-full overflow-y-auto">
            <h1 className="w-full text-center text-3xl">LIST OF STUDENTS: </h1>
            {removeDuplicate()}
            {
              studentQuery.isFetching ?
              <h1 className="w-full text-center text-2xl">LOADING...</h1>
              :
              <>
              {
                studentQuery.data.students.map((student) => {
                  return (
                    <Student_Data studentId={student._id} studentName={student.name} />
                  )
                })
              }
              </>
            }
          </div>
        }
        {
          size.width >=600 ?
          <></>
          :
          <Bottomobnav menuList={teacherMenuList} menuOption={selected} setMenuOption={setSelected} />
        }
    </div>
  );
}

const Teacher_D = () => {
  return (
    <AuthWrapper>
      <Teacher_D_Inner />
    </AuthWrapper>
  )
}

export default Teacher_D