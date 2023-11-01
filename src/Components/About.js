import React from "react";
import PropTypes from "prop-types";

export default function About(props) {
  return ( 
    <div className="container my-4 ">
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div
        class={`accordion-item bg-${
          props.mode === "light" ? "light" : "dark"
        } text-${props.mode === "light" ? "dark" : "light"}`}
      >
        <h2 class="accordion-header">
          <button
            class={`accordion-button collapsed bg-${
              props.mode === "light" ? "light" : "dark"
            } text-${props.mode === "light" ? "dark" : "light"}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <strong> About Author</strong>
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> class. This is the
            first item's accordion body.
          </div>
        </div>
      </div>
      <div
        class={`accordion-item bg-${
          props.mode === "light" ? "light" : "dark"
        } text-${props.mode === "light" ? "dark" : "light"}`}
      >
        <h2 class="accordion-header">
          <button
            class={`accordion-button collapsed bg-${
              props.mode === "light" ? "light" : "dark"
            } text-${props.mode === "light" ? "dark" : "light"}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            <strong>Experience</strong>
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> class. This is the
            second item's accordion body. Let's imagine this being filled with
            some actual content.
          </div>
        </div>
      </div>
      <div
        class={`accordion-item bg-${
          props.mode === "light" ? "light" : "dark"
        } text-${props.mode === "light" ? "dark" : "light"}`}
      >
        <h2 class="accordion-header">
          <button
            class={`accordion-button collapsed bg-${
              props.mode === "light" ? "light" : "dark"
            } text-${props.mode === "light" ? "dark" : "light"}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            <strong>Social Media Links</strong>
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> class. This is the
            third item's accordion body. Nothing more exciting happening here in
            terms of content, but just filling up the space to make it look, at
            least at first glance, a bit more representative of how this would
            look in a real-world application.
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
