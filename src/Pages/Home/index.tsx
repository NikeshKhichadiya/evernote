import { getNoteList } from "../../Services/Home/index.services";
import NoteList from "../../Shared/Components/Home/NoteList";
import NoteView from "../../Shared/Components/Home/NoteView";
import { useEffect, useState } from "react";

const Home = () => {

    const [noteList, noteListHandler] = useState<any[]>([]);
    const [id, idHandler] = useState<string>("");

    useEffect(() => {

        const list = getNoteList();
        noteListHandler(list)
        if (Array.isArray(list) && list.length > 0) idHandler(list[0]?.id || '')

    }, []);

    return (
        <div className="grid grid-cols-3">

            <NoteList list={noteList} id={(id: string) => idHandler(id)} />
            <NoteView id={id} />

        </div>
    )

}

export default Home;