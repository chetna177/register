import React from 'react'
import style from "./form.module.css";
const Forms = () => {
  return (
    <div>
      <section className={style.form}>
        <div className={style.firstitle}>
            1% OF THE INDUSTRY
        </div>
        <div className={style.secondtitle}>
            Welcome to your new Digital reality
        </div>
        <div>
            <form action="" >
                <input type="search" /><button>Submit</button>
            </form>
        </div>
        <div className={style.last}>
            <p> <i class="fa-solid fa-circle-check"></i> Instant Results</p>
            <p> <i class="fa-solid fa-circle-check"></i> User Friendly interface</p>
            <p> <i class="fa-solid fa-circle-check"></i> Peronalized Customized</p>
        </div>
      </section>
    </div>
  )
}

export default Forms
