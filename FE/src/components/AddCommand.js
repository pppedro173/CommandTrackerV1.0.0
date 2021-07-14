import {useState} from 'react'


const AddCommand = ( {onAdd} ) => {

    const [howTo,setHowTo] = useState('')
    const [line,setLine] = useState('')
    const [platform,setPlatform] = useState('')


    const onSubmit= (e) => {
        e.preventDefault()
        if(!howTo || !line){
            alert('Please Add a howTo and line')
            return
        }

        onAdd({ howTo, line, platform})

        setHowTo('')
        setLine('')
        setPlatform('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>         
            <div className='form-control'>
                <label>How To</label>
                <input type='text' placeholder='Add How to' value={howTo} onChange={(e) => setHowTo(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Line</label>
                <input type='text' placeholder='Add Line' value={line} onChange={(e) => setLine(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Platform</label>
                <input type='text' placeholder='Add Platform' value={platform} onChange={(e) => setPlatform(e.target.value)} />
            </div>
            <input type='submit' value='Save Command' className='btn btn-block' />
        </form>

    )
}

export default AddCommand
