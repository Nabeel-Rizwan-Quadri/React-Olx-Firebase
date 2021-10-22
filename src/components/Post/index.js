function post ({id, userId, title, body, del, edit}) {
    
    return <div>
        
        <h2 className="just">Unique Id: {id}</h2>
        <h1 className="just">{title}</h1>
        <br/>
        <p className="just">{body}</p>
        
        <button onClick={del}>Delete</button>
        <button onClick={edit}>Edit</button>
        
    </div>
}

export default post
