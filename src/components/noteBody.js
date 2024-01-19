import { MdDeleteForever } from 'react-icons/md';

const NoteBody = ({ id, text, date, handleDeleteNote }) => {
    return (
    <div className="note-body">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever onClick={()=> handleDeleteNote(id)} className='delete-icon' size='1.3em' />
            </div>
    </div>)
};

export default NoteBody;
