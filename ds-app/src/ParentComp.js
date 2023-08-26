import ChildComp from "./ChildComp";
function ParentComp(){
    
   const myCardsData=[
    {name:"hari",title:"bhakt",message:"this is BHOLLA",image:"https://imgs.search.brave.com/pg5nXxULxa0ub8PCG0P1DzTjUdYfvXYD2Oz4vwywmIQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2hvbWUvZmlsZXR5/cGVzL3Bob3RvLndl/YnA"},
    {name:"RAM",title:"hanuman",message:"this is PEACE",image:"https://images.pexels.com/photos/13689631/pexels-photo-13689631.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {name:"SHIVA",title:"lord",message:"this is DESTROYER"},
    {name:"VISHNU",title:"bhagwaan",message:"this is GOD"},
]

    return(
        <>
        {myCardsData.map((oneObj) =>{
            return (
               <ChildComp
                name={oneObj.name}
                title={oneObj.title}
                message={oneObj.message}
                image={oneObj.image}
                />
            );
})}
        </>

        
    );
}
export default ParentComp;