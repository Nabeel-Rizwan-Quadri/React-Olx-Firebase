function post ({id, userId, title, description, del, edit, price}) {
    
    return <div>
        
        <h2 className="just">User Id: {id}</h2>
        <h1 className="just">{title}</h1>
        <br/>
        <h3 className="just">{description}</h3>
        
        {/* <div className="photos">
        <FbImageLibrary images={[info.image[0], info.image[1], info.image[2], info.image[3], info.image[4], info.image[5], info.image[6]]}/>
        </div> */}

        <h3 className="just">Price: {price}/-</h3>
        
        <button onClick={del}>Delete</button>
        <button onClick={edit}>Edit</button>
        
    </div>
}

export default post
