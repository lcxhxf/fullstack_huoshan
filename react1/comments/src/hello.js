const HelloComponent = (props) => {
    // console.log(props);
    const {userName} = props;
    return (
        <div>
            {userName}
        </div>
    )
}
export default HelloComponent;