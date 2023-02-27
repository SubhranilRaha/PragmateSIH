import axios from 'axios';
import { queryClient } from '../config/queryClient';

const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000';

export const addStudent = async (name, grade, section, rollNumber, email) => {
    try
    {
        const body = { 
            name, 
            degree: grade, 
            stream: section, 
            rollNumber, 
            email 
        };
        const res = await axios.post(`${baseUrl}/create/student`, body, { withCredentials: true });
        return res.data;
    }
    catch(error)
    {
        const res = error.response;
        if(res.status === 401) return { ...res.data, error: "Please login to view this page" };
        else // 500 or others
        {
            console.error(error.message);
            return { ...res.data, error: "Something went wrong" };
        }
    }
}

export const addTeacher = async (name, email) => {
    try
    {
        const body = { 
            name,
            email 
        };
        const res = await axios.post(`${baseUrl}/create/teacher`, body, { withCredentials: true });
        return res.data;
    }
    catch(error)
    {
        const res = error.response;
        if(res.status === 401) return { ...res.data, error: "Please login to view this page" };
        else // 500 or others
        {
            console.error(error.message);
            return { ...res.data, error: "Something went wrong" };
        }
    }
}

export const createClassroom = async (subject, learningOutcomes) => {
    try
    {
        const body = { subject, learningOutcomes };
        const res = await axios.post(`${baseUrl}/school/createClassroom`, body, { withCredentials: true });
        return res.data;
    }
    catch(error)
    {
        const res = error.response;
        if(res.status === 401) return { ...res.data, error: "Please login to view this page" };
        else // 500 or others
        {
            console.error(error.message);
            return { ...res.data, error: "Something went wrong" };
        }
    }
}

export const addTeacherClassroom = async (classroomId, teacherId) => {
    try
    {
        const body = { classroomId, teacherId };
        const res = await axios.post(`${baseUrl}/school/classroom/addTeacher`, body, { withCredentials: true });
        return res.data;
    }
    catch(error)
    {
        const res = error.response;
        if(res.status === 401) return { ...res.data, error: "Please login to view this page" };
        else // 500 or others
        {
            console.error(error.message);
            return { ...res.data, error: "Something went wrong" };
        }
    }
}

export const addStudentClassroom = async (classroomId, studentId) => {
    try
    {
        const body = { classroomId, studentId };
        const res = await axios.post(`${baseUrl}/school/classroom/addStudent`, body, { withCredentials: true });
        return res.data;
    }
    catch(error)
    {
        const res = error.response;
        if(res.status === 401) return { ...res.data, error: "Please login to view this page" };
        else // 500 or others
        {
            console.error(error.message);
            return { ...res.data, error: "Something went wrong" };
        }
    }
}

export const getClassroom = async () => {
    try
    {
        const res = await axios.get(`${baseUrl}/school/classroom`, { withCredentials: true });
        return res.data;
    }
    catch(error)
    {
        const res = error.response;
        if(res.status === 401) return { ...res.data, error: "Please login to view this page" };
        else // 500 or others
        {
            console.error(error.message);
            return { ...res.data, error: "Something went wrong" };
        }
    }
}

export const getTeacher = async () => {
    try
    {
        const res = await axios.get(`${baseUrl}/school/teacher`, { withCredentials: true });
        return res.data;
    }
    catch(error)
    {
        const res = error.response;
        if(res.status === 401) return { ...res.data, error: "Please login to view this page" };
        else // 500 or others
        {
            console.error(error.message);
            return { ...res.data, error: "Something went wrong" };
        }
    }
}

export const getStudent = async () => {
    try
    {
        const res = await axios.get(`${baseUrl}/school/student`, { withCredentials: true });
        return res.data;
    }
    catch(error)
    {
        const res = error.response;
        if(res.status === 401) return { ...res.data, error: "Please login to view this page" };
        else // 500 or others
        {
            console.error(error.message);
            return { ...res.data, error: "Something went wrong" };
        }
    }
}