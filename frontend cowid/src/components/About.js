/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import logo from './a.png';

function About() {
    return (

        <div className="container bg-grey-100 back">
            <div className=" text-center">
                <div className="container py-5 mx-auto" style={{ width: "200px" }}>
                    <h1 className="text-red-500 bg-white rounded-lg shadow-xl overflow-hidden p-2 "><b>About</b></h1>
                </div>
                <h5 className="xl:col-start-1 bg-white rounded-xl xl:col-end-4 container border border-info p-3" style={{ textAlign: "center" }}>Develop covid-19 application which will show case all the relevant KPI's like total confirmed , death, recovered. By using free API’s
                    We are showing the data using data visualization components to our users which help them to easily get the information about the content we are showing in our project. Our Target Audience is all the peoples who want to know the information about their city or state or all over INDIA. There is no particular age group or any other type. It is for all the peoples.</h5>
            </div>
            <div className="justify-center flex flex-wrap xl:col-start-1 bbg-white rounded-xl py-5 xl:col-end-4 container">
                <div class="card m-3 text-center" style={{ "width": "18rem" }}>

                    <img class="card-img-top img-fluid m-3 pl-5" style={{ maxWidth: "80%" }} src={logo} alt="alt image" />
                    <div class="card-body">
                        <h5 class="card-title">Aakash Deep Soni</h5>
                        <p class="card-text">Full Stack Developer</p>
                        <p class="card-text">Email: 2018pcecsaakash2@poornima.org</p>
                    </div>
                </div>

                <div class="card m-3 text-center" style={{ "width": "18rem" }}>

                    <img class="card-img-top img-fluid m-3 pl-5" style={{ maxWidth: "80%" }} src={logo} alt="alt image" />
                    <div class="card-body">
                        <h5 class="card-title">Anupam Agrawal</h5>
                        <p class="card-text">Full Stack Developer</p>
                        <p class="card-text">Email: 2018pcecsanupam23@poornima.org</p>
                    </div>
                </div>

                <div class="card m-3 text-center" style={{ "width": "18rem" }}>

                    <img class="card-img-top img-fluid m-3 pl-5" style={{ maxWidth: "80%" }} src={logo} alt="alt image" />
                    <div class="card-body">
                        <h5 class="card-title">Bhavesh Kumar Agrawal</h5>
                        <p class="card-text">Frontend Developer</p>
                        <p class="card-text">Email: 2018pcecsbhavesh40@poornima.org</p>

                    </div>
                </div>
            </div>
            <div className="border border-success m-6 py-2">
                <h4 className="m-3 text-center font-bold text-blue-600">Contact us</h4>
                <form className="m-10 p-2 text-center">
                    <div className="form-group m-3">
                        <input type="text" className="form-control" id="name" placeholder="Enter Name" />
                    </div>
                    <div className="form-group m-3">
                        <input type="email" className="form-control" id="email" placeholder="Enter Email" />
                    </div>
                    <div className="form-group m-3">
                        <textarea type="text" className="form-control" id="message" placeholder="Discribe your issue" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary m-3">Submit</button>
                </form>
            </div>

        </div>

    )
}

export default About;
