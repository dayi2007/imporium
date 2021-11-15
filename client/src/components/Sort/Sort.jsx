import './Sort.css'

const Sort = (props) => {

    const handleSort = (event) =>{
        props.handleSort(event.target.value)
    }

    return(
        <div>

        </div>
    )
}
export default Sort