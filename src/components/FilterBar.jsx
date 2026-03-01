import "./TaskLook.css"


function FilterBar({filter, setFilter}){
    return(
        <div>

            {/*Filter Button: ALL*/}

           <button
            className={`filter-button ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
            >
                All
           </button>

            
            {/*Filter Button: ACTIVE*/}

           <button
            className={`filter-button${filter==="active"?"active":""}`}
            onClick={()=>setFilter("active")}>
                Active
           </button>

            {/*Filter Button: COMPLETED*/}

           <button
            className={`filter-button${filter==="completed"?"completed":""}`}
            onClick={()=>setFilter("completed")}>
                Completed
           </button>
        </div>
    )
}

export default FilterBar