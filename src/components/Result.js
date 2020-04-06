import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';




function Result(props) {
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
<div>
       <p>According to your results these are the job recomendations that best match your soft skills. You wil be able to generate a custom CV for each job post. </p>
  </div>


      <div>
      <h1>Gift of the Gab</h1>
        Congrats for taking parting part in our questions from the way you answered the questions we realized you have a very good way of communicating your message. and feel you are now<strong> ready to apply for the job below</strong>!
<p>Here is a link to a few jobs that are in need or people with your skills. <a href="https://www.pnet.co.za/jobs--Marker-Grader-Clothing-Durban-Talented-Recruitment--3127159-inline.html"> Job Recommendation </a></p>
  </div>

     <div >
     <h1>Always on time</h1>
       Congrats for taking parting part in our questions from the way you answered the questions we realized you have very good take pride in your punctuality, therefore we have matched you with companies that seek individuals with high time management skills. You are now<strong>ready to apply for the job below</strong>!
  <p>Here is a link to a few jobs that are in need or people with your skills. <a href="https://www.olx.co.za/item/bussiness-developer-cape-town-iid-1062195165"> Job Recommendation </a></p>
   </div>

   <div >
   <h1>Natural born leader</h1>
     Wow, we know a leader when we see one with the way in which you chose to answer those questions we couldn't help but realize you have the attributes of a leader. and feel you are now<strong> ready to apply for the job below</strong>!
 <p>Here is a link to a few jobs that are in need or people with your skills. <a href="https://www.pnet.co.za/jobs--Patternmaker-Clothing-Durban-Talented-Recruitment--3127053-inline.html"> Job Recommendation </a></p>
  </div>
  <div >
  <button >Generate CV</button>
  </div>
	  
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
