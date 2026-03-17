import { useState } from "react";
import { useComments } from "../hooks/useComments";


export default function CommentList({ taskId }: { taskId: string }){
    const { comments, addComment } = useComments(taskId);

    const [ text, setText ] = useState("");

    function submit(){
        if(!text) return
        
        addComment(text);
        setText("");
    }

    return (
        <div className="space-y-3">
            <h3 className="font-semibold">Comments</h3>

            { comments.map((c) => (
                <div key={c.id} className="border p-2 rounded">
                    {c.content}
                </div>
            ))}

            <div className="flex gap-2">
                <input type="text" className="border p-2 flex-1" 
                value={text}
                onChange={(e) => setText(e.target.value)}/>

                <button className="bg-blue-500 text-white px-3" onClick={submit}>Add</button>
            </div>
        </div>
    )
}