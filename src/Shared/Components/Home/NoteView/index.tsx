import { useEffect, useState } from "react";
import { NoteViewProps } from "./index.model";
import { getNoteFromId } from "../../../../Services/Home/index.services";
import { Note } from "../../../../Services/Home/index.models";

const NoteView: React.FC<NoteViewProps> = ({ id }) => {

    const [noteData, noteDataHandler] = useState<Note>();

    useEffect(() => {

        const data = getNoteFromId(id);
        if (!!data) { noteDataHandler(data) };

    }, [id]);

    return (

        <div className="col-span-2 p-10 flex flex-col overflow-y-auto max-h-[100vh] sticky top-0">

            <h2 className="text-4xl font-bold mb-[40px] text-gray-700">{noteData?.title || ''}</h2>
            <p className="text-xl font-semibold mb-[24px] text-gray-500">{noteData?.description || ''}</p>
            <img src={noteData?.image_url} alt="note" className="max-w-[100%] aspect-[3/2]" />

        </div>

    )

}

export default NoteView;