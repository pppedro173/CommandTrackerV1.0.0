import { FaTimes } from 'react-icons/fa'

const Command = ({command, onDelete}) => {
    return (
        <div className='command'>
            <h3>{command.howTo} <FaTimes style={{color:'red', cursor: 'pointer'}}
            onClick={() => onDelete(command.id)}
            /></h3>
            <p>{command.line}</p>
        </div>
    )
}

export default Command
