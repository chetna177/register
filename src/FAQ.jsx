import React from "react";
import style from "./faq.module.css";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import "./faq.css";
const FAQ = () => {
       

    const [classname, setClassName] = React.useState("questiontext");

      



  return (
    <>
      
    <section className="questions">
      
        <div className="title">
            <h2>FAQ</h2>
            <h2>Frequently Ask Questions</h2>
        </div>
        <div className="sectioncenter">
            
            <article className="question" onClick={() =>
                     
                     setClassName("showtext")}>
                <div className="questiontitle">
                    <p>Can I recover deleted files from desktop with this software?</p>
                    <i  className="fa-solid fa-chevron-right"></i>
                </div>
                <main className = {classname} >
               
                    You would not be able to change or modify the number of items once you have already placed an order.
                    You can place another fresh order with the desired modifications. However, you can change your
                    shipping preferences in Your Account at any time after placing your order as long as the order
                    hasn't entered the shipping process yet.
                </main>


            </article>

            <article className="question" onClick={() =>
                     
                     setClassName("showtext")}>
                <div className="questiontitle">
                    <p>Can I recover deleted files from desktop with this software?</p>
                    <i  className="fa-solid fa-chevron-right"></i>
                </div>
                <main className = {classname} >
               
                    You would not be able to change or modify the number of items once you have already placed an order.
                    You can place another fresh order with the desired modifications. However, you can change your
                    shipping preferences in Your Account at any time after placing your order as long as the order
                    hasn't entered the shipping process yet.
                </main>


            </article>
            <article className="question" onClick={() =>
                     
                     setClassName("showtext")}>
                <div className="questiontitle">
                    <p>Can I recover deleted files from desktop with this software?</p>
                    <i  className="fa-solid fa-chevron-right"></i>
                </div>
                <main className = {classname} >
               
                    You would not be able to change or modify the number of items once you have already placed an order.
                    You can place another fresh order with the desired modifications. However, you can change your
                    shipping preferences in Your Account at any time after placing your order as long as the order
                    hasn't entered the shipping process yet.
                </main>


            </article>
            <article className="question" onClick={() =>
                     
                     setClassName("showtext")}>
                <div className="questiontitle">
                    <p>Can I recover deleted files from desktop with this software?</p>
                    <i  className="fa-solid fa-chevron-right"></i>
                </div>
                <main className = {classname} >
               
                    You would not be able to change or modify the number of items once you have already placed an order.
                    You can place another fresh order with the desired modifications. However, you can change your
                    shipping preferences in Your Account at any time after placing your order as long as the order
                    hasn't entered the shipping process yet.
                </main>


            </article>
            <article className="question" onClick={() =>
                     
                     setClassName("showtext")}>
                <div className="questiontitle">
                    <p>Can I recover deleted files from desktop with this software?</p>
                    <i  className="fa-solid fa-chevron-right"></i>
                </div>
                <main className = {classname} >
               
                    You would not be able to change or modify the number of items once you have already placed an order.
                    You can place another fresh order with the desired modifications. However, you can change your
                    shipping preferences in Your Account at any time after placing your order as long as the order
                    hasn't entered the shipping process yet.
                </main>


            </article>           
          
        
        </div>
          <section className="bottom">
                <button>Show More  <i class="fa-solid fa-arrow-right"></i></button>
              </section>
    </section>
    

  
    </>
  );

  
};

export default FAQ;
