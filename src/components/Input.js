import React,{useState, useEffect} from 'react'
import Output from './Output'
function Input() {
    var lcnotes;
    if(localStorage.getItem('notes')!=null)
    {
        lcnotes=JSON.parse(localStorage.getItem('notes'));
    }
    else
    {
        console.log("not present")
        lcnotes=[];
    }
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const [notes,setNotes]=useState(lcnotes)
    const [editId,seteditId]=useState('')
    const [editMode,setEditMode]=useState(false)
    const addNotes=(e)=>
    {
        const newData={
            id:Date.now(),
            title:title,
            content:content,
            date:new Date().toLocaleDateString()
        }
        console.log(newData)
        setNotes([...notes,newData])
    }
    const submitHandler=()=>
    {   if(editMode===true)
        {
            const newArray=notes.map((note)=>{
                return{
                    ...note,
                    title:title,
                    content:content

                }
            })
            //edit mode
           
            
            setEditMode(false)
            setNotes(newArray)
            
        }
        else{
            addNotes();
        }
        console.log(title,content);
        
        setTitle('')
        setContent('')
    }

    const deleteNote=(id)=>
    {
        console.log("deleted fun")
        const newNotes=notes.filter((item)=>{return item.id !==id});
        setNotes(newNotes)

       
    }

    const edit=(id)=>{
        setEditMode(true)
        seteditId(id)
        const editObj= notes.find((item)=>{return item.id ===id})
        console.log(editObj)
        setTitle(editObj.title)
        setContent(editObj.content)


    }

    useEffect(()=>{
        localStorage.setItem('notes',JSON.stringify(notes));
    },[notes]);

  return (
    <div >
        <div className='container'>
      <h1 className='text-center'>Notes App📝</h1>
     <br/>
     <div class="text-bg-secondary p-3">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Title</label>
            <input type="text" class="form-control"  value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
        </div>
        
        {(editMode) ?<button type="button" class="btn btn-primary btn-sm " onClick={submitHandler}>EDIT</button> :<button type="button" class="btn btn-primary btn-sm " onClick={submitHandler}>ADD</button>}
      
 </div>
    </div>
    {notes.map((item)=>(
        <Output key={item.title} info={item} delete={deleteNote} edit={edit}/>
    ))}
    
    </div>
  )
}

export default Input