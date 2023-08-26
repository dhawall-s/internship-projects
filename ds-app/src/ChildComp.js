function ChildComp(props)
{
    console.log(props);
    return(
        <>
        <div className="card">
            <div className="container">
                <h1> {
                    props.name
                    }
                </h1>
                <h2>
                    {
                        props.title
                    }
                </h2>
                <p>
                    {
                        props.message
                    }
                </p>
                <img src={props.image} alt="Image" />
            </div>

        </div>
    
        </>
    );
}
export default ChildComp;