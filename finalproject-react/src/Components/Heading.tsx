import {ReactElement} from 'react'


type HeadingProps = { title : string }


const Heading = ({ title }: HeadingProps): ReactElement  => {
    return (
      <h1 className='title'>{ title }</h1>
    )
}


export default Heading