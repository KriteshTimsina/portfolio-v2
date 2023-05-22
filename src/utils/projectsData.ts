type IProjects= {
    id:number,
    title:string,
    description:string,
image:string,
url:string,
github:string,
techStacks:string[]
}[]

export const projectsData:IProjects = [
    {
        id:1,
        title:"Subhakaarya",
        description:"Event management website that allows users to view and book services for the events. Specifically worked on the frontend part of the website, utilizing ReactJS and Tailwind CSS." ,
        image:"/src/assets/subhakaarya.png",
        url:"www.subhakaarya.com",
        github:"",
        techStacks:["React js","Tailwind css","Django"]
    },
    {
        id:2,
        title:"SastoBazaar",
        description:"",
        image:"",
        url:"www.sastobazaar.netlify.com",
        github:"",
        techStacks:["React js","Tailwind css","Typescript"]
    },
    {
        id:3,
        title:"Resumee",
        description:"",
        image:"",
        url:"www.resumee.netlify.com",
        github:"",
        techStacks:["React js","Tailwind css","Typescript"]
    },
]