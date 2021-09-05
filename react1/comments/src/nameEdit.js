const NameEditComponent = (props) => {
    console.log(props);
    const {userName, onChange} = props;
    return (
        <div>
            <label>Update name:</label>
            <input value={userName} onChange={onChange}/>
        </div>
    )
}
export default NameEditComponent;