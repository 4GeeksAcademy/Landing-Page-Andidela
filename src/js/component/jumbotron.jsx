import React from "react"

const Jumbotron = ()=>{
    return(
        <div className="p-5 text-center bg-body-tertiary rounded-3" style={{backgroundColor: "#dcd7d7"}}>

    <h1 className="text-body-emphasis">A warm welcome</h1>
    <p className="col-lg-8 mx-auto fs-5 text-muted">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, porro maxime illum laboriosam adipisci odit architecto quisquam iusto eligendi velit quo necessitatibus est obcaecati molestias sequi? A sed earum ut?
    </p>
    <div className="d-flex justify-content-start gap-2 mb-5">
      <button className="d-inline-flex align-items-start btn btn-primary btn-lg px-4 rounded-pill" type="button">
        Call to action

      </button>
    </div>
  </div>
    )
}
export default Jumbotron