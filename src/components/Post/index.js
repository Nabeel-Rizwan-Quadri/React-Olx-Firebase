import { useHistory } from "react-router-dom"

function Post({ item }, del, edit) {

    const history = useHistory()

    const goToDetails = (id) => {
        console.log(`/details/${id}`)
        history.push(`/details/${id}`)
    }

    return <div onClick={() => goToDetails(item.id)}>
        <h3 className="just">Seller Name: {item.userName}</h3>
        <h2  className="just">Product Name: {item.title}</h2>
        <br />
        <h4 className="just">Descrption: {item.description}</h4>

        <img height="100" width="100" src={item.images[0]} ></img>

        <h3 className="just">Price: {item.price}/-</h3>

        {/* <button onClick={del}>Delete</button>
        <button onClick={edit}>Edit</button> */}

        <h4 className="just">Created At: {item.createdAt}</h4>
        <button ></button>

    </div>
}

export default Post

