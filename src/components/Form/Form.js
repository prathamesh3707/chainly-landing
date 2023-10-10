import React from "react";
// eslint-disable-next-line no-unused-vars
import styles from "./Form.module.css";
import  { useRef } from "react";

function Form() {
   const formRef = useRef(null); // Create a ref for the form
   const scriptURL =
     "https://script.google.com/macros/s/AKfycbyboldYESCsYOtolH9FoXd1RiKTEoAsTmHB1lR9sT6snTfLX7Mh5n-qhxRejN5GrUr4/exec";

   const handleSubmit = (e) => {
     e.preventDefault();
     fetch(scriptURL, { method: "POST", body: new FormData(formRef.current) })
       .then((response) =>
         alert("Thank you! Your form is submitted successfully.")
       )
       .then(() => {
         window.location.href = "/"; // Navigate to the root route after form submission
       })
       .catch((error) => console.error("Error!", error.message));
   };



  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form
          class="space-y-8"
          method="post"
          name="product"
          id="product"
          onSubmit={handleSubmit}
          ref={formRef} // Attach the ref to the form element
        >
          <div style={{ backgroundColor: "black" }}>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@chainly.studio"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="subject"
              name="name"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              name="message"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
              style={{ outline: "none", color: "black" }}
            ></textarea>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm w-2/5 font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
