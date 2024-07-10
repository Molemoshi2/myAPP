import PropTypeS from 'prop-types'

function Card(props){

    return(
        <>
        <div className="main-mom">
        <div className="card">
            <img src="https://cdn.netflorist.co.za/layout/product-photos/ZoomIn/500X638/NETSP2966_2.jpg" height={150} width={200} alt="react image" />
            <h2>{props.Heading}</h2>
            <p>{props.description} </p>
        </div>
        </div>
        
        </>
        
    )
}
// PRPTPES ADDS A DATA TYPE TO THE PROPS
Card.propTypes = {
    Heading: PropTypeS.string,
}
//DEFAULTPROP ADD A DEFAUKT VALUE S HE VALUE IS NOT ASSIGNED TO ANYTHING

Card.defaultProps = {
    Heading: 'Heading goes here',
    description: 'description goes here'
}
export default Card