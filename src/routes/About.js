import React, { useEffect, useState } from 'react'
import MySocials from '../components/MySocials'
import { useDispatch, useSelector } from 'react-redux';
import { setLocalStoragePermission } from '../redux/bookSlice';

export default function About() {
    const favoriteBooks = useSelector((state) => state.book.favoriteBooks);
    const localStoragePermission = useSelector((state) => state.book.localStoragePermission);
    const [isChecked,setIsChecked] = useState(localStoragePermission);
    const dispatch = useDispatch();

    useEffect(() => {
        if(localStoragePermission)localStorage.setItem("favoriteBooks",JSON.stringify(favoriteBooks))
    },[localStoragePermission,favoriteBooks])

  return (
    <main>
        <div className="mainTop">
            <MySocials/>
        </div>
        <div className="mainGrid">
            <div>
            This web app is made by Furkan Doğan &copy; 2023 (There is no copyright or whatever just wanted to write it)
            <br />
            <br />
            <hr />
            <br />
            Your favorites will be deleted unless you choose to keep them in your local storage. If you agree for me to use your local storage for the list of your favorite books, please confirm.
            <br /><br />
            <form id='localStorageForm' onSubmit={(e) => {
                e.preventDefault();
                dispatch(setLocalStoragePermission(isChecked))
                isChecked ? localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks)) : localStorage.removeItem("favoriteBooks");
            }}>
                <label htmlFor="storageUsage">Do you give permission for local storage usage</label>
                <input type="checkbox" name="storageUsage" id="storageUsage" checked={isChecked} onChange={() => {setIsChecked(!isChecked)}}/>
                <button>Submit</button>
            </form>
            <br />
            {localStoragePermission ? <div id="congrats">Congrats, your favorites are being saved in your local storage right now.</div> : ""}
            </div>
        </div>
    </main>
  )
}
