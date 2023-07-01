import './Toggle-button.css'
export default function ToggleButton(props){
    function changeHandler(e){
    const isChecked = e.target.checked;
     if (isChecked) {
       props.setLight();
     } else {
       props.setDark();
     }
    }
    return (
      <div class="w-full md:flex md:items-center md:justify-end md:w-72">
        <label for="toggleB" class="flex items-center cursor-pointer  justify-between px-9 py-4 md:justify-center md:px-0 md:py-0">
          <p className=" text-gray-light-2 font-semibold mr-4">Dark Mode</p>
          <div class="relative ">
            <input type="checkbox" id="toggleB" class="sr-only" onChange={changeHandler}/>

            <div class="bg block bg-gray-600 w-14 h-8 rounded-full"></div>

            <div class="dot absolute left-1 top-1 bg-dark-button w-6 h-6 rounded-full transition"></div>
          </div>
        </label>
      </div>
    );
}