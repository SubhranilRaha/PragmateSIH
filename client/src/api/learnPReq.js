import axios from 'axios';
import { queryClient } from '../config/queryClient';

const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000';

export const getLearningPaths = async (studentId) => {
    try
    {
        const body = { studentId };
        const res = await axios.post(`${baseUrl}/learnpath/getByStudent`, body, { withCredentials: true });
        return res.data;
    }
    catch(error)
    {
        const res = error.response;
        console.log(error.message);
        if(res.status === 401) return { ...res.data, error: "Please login to view this page" };
        else return { ...res.data, error: "Something went wrong" }; // 500 or others
    }
}

export const updateLearningPath = async (updatedLP) => {
    // data = { classroomId, studentId, learningOutcomes }
    try
    {
        const { classroomId, studentId, learningOutcomes } = updatedLP;
        const body = { classroomId, studentId, learningOutcomes };
        const res = await axios.post(`${baseUrl}/learnpath/update`, body, { withCredentials: true });
        queryClient.invalidateQueries('learnpath');
        return res.data;
    }
    catch(error)
    {
        const res = error.response;
        console.log(error.message);
        if(res.status === 401) return { ...res.data, error: "Please login to view this page" };
        else return { ...res.data, error: "Something went wrong" }; // 500 or others
    }
}