export default function Forms() {
    return (
      <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row
      max-w-7xl px-10 justify-evenly mx-auto items-center">
        
        <form className ='flex flex-col items-center' method="POST">
            <div className ='flex flex-row space-y-2 w-fit mx-auto items-end space-y-4 space-x-4'>
                <div className ='flex flex-col items-center space-y-2 w-fit mx-auto'> 
                    <label>Nom</label>
                    <input type="text" name="name" />
                </div>
           
                <div className ='flex flex-col items-center space-y-2 w-fit mx-auto'> 
                    <label>Prénom</label>
                    <input type="text" name="email" />
                </div>
            </div>
  
          <div className='flex flex-col items-center my-2 space-y-2 w-fit mx-auto'> 
            <label>Genre</label>
            <input name="number"/>
          </div>

          <div className='flex flex-col items-center my-2 space-y-2 w-fit mx-auto'>
            <label>Age</label>
            <input name="number"/>
          </div>
  
          <button
              type="submit"
              className="flex flex-col w-1/2 my-2 items-center px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
              Submit
            </button>
        </form>
      </div>
    )
  }