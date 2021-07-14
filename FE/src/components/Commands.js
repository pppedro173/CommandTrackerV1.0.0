import Command from './Command'

const Commands = ( {commands, onDelete, onToggle}) => {

    return (
        <>
            {commands.map((command) => (
            <Command key={command.id}
            command={command}
            onDelete={onDelete}
            onToggle={onToggle} />
            ))}
        </>
    )
}

export default Commands
