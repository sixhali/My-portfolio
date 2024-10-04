import { create } from "zustand";
import myPhotoCircle from '../assets/MePhoto.jpg';
export const usMyData = create((set)=>({
    myData:{
        firstName: "Shixali",
        lastName: "Guliyev",
        profilePhoto: myPhotoCircle,
        description_1:"I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.",
        description_2:"My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.",
        Skils:[
            {id:0,name:'Html/Css',percent:90},
            {id:1,name:'React JS',percent:90},
            {id:2,name:'JavaScript',percent:80},
            {id:3,name:'Next JS',percent:83},
            {id:0,name:'Html/Css',percent:90},
        ],
        Technologies_Tools:[
            {id:0,name:'Git/GitHub:'},
            {id:1,name:'Tailwind CSS:'},
            {id:2,name:'Bootstrap:'},
            {id:3,name:'Material UI:'},
            {id:3,name:'Fatch/Axios:'},
            {id:4,name:'Reset Api:'}
        ]
        

        
    }
}))