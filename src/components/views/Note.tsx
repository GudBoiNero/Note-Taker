import styles from 'Note.module.css'

export class NoteProps {
    title;
    content;
    size;
    //attachments;
    constructor(
        title: string = "", 
        content: string = "", 
        size: { width: number, height: number } = { width: 1, height: 1 },
        //attachments: string[] = [], 
    ) {
        this.title = title
        this.content = content
        this.size = size
        //this.attachments = attachments
    }
}

export default function Note(props: NoteProps = new NoteProps()) {
    return (
        <div className={styles.Note}>

        </div>
    )
}