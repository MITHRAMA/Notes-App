import React from 'react'

function Output(props) {
  return (
    <div>
        <div className='container'>
            
        <div class="card text-center mt-3">
               
                <div class="card-body">
                    <h5 class="card-title">{props.info.title}</h5>
                    <p class="card-text">{props.info.content}</p>
                    <a href="#" class="btn btn-warning" onClick={()=>props.edit(props.info.id)}>Edit</a>
                    <a href="#" class="btn btn-danger" onClick={()=>props.delete(props.info.id)}>Delete</a>
                </div>
                <div class="card-footer text-body-secondary">
                    {props.info.date}
                </div>
                </div>
        </div>
    </div>
  )
}

export default Output