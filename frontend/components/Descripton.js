import React from 'react';

export default function Description() {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-800 bg-opacity-80 rounded-lg shadow-lg p-8 text-white max-w-7xl">
        <div className="mb-4 text-center">
          <h2 className="text-3xl font-bold mb-2">What is TableVision?</h2>
          <p className="text-lg">
            TableVision is a place for UMich students to come and see how many tables are empty in school buildings and study spaces. The goal is to help students find a place to study without having to go to multiple places just to find a place to work.
          </p>
        </div>
        <div className="mb-4 text-center">
          <h2 className="text-3xl font-bold mb-2">How does it work?</h2>
          <p className="text-lg">
            TableVision software works by sending pictures of each study space to our Flask server. Our server then uses our custom computer vision model built on top of YoloV5 to detect the number of occupied and unoccupied tables in the room. Then our web app, which you are looking at, displays the number of open tables.
          </p>
        </div>
        <div className="mb-4 text-center">
          <h2 className="text-3xl font-bold mb-2">What photos is TableVision running on?</h2>
          <p className="text-lg">
            As a Proof of Concept, we are currently running our software on photos that we have taken of each study space. If you click on the study space, you can see what photo the model is using and see that it works.
          </p>
        </div>
        <div className="mb-4 text-center">
          <h2 className="text-3xl font-bold mb-2">What are the next steps for TableVision?</h2>
          <p className="text-lg">
            The next steps for TableVision are to continue to work with the school to secure access to security camera footage so that we can take a snapshot of the study space every 5 minutes and send it back to our model. This will allow us to have a live feed of the study space and update the number of open tables in real-time.
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Please fill out this form about TableVision to give us feedback!</h1>
          <button className="px-4 py-2 bg-white text-gray-800 font-bold rounded-md">
            Feedback Form
          </button>
        </div>
      </div>
    </div>
  );
}



