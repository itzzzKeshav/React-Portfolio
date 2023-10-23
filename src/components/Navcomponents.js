import './style.css';
import  back  from './images/back.jpg';
import kk from './images/kk.jpeg';
import download from './images/download.png';
import * as bootstrap from 'bootstrap';

const tooltips = document.querySelectorAll('.tt')
        tooltips.forEach((tooltip) => {
            new bootstrap.Tooltip(tooltip)
        })

export function Home(){
    return(
        <section style={{padding:"0px 0px",backgroundColor: "rgb(255,255,255)"}} id="Home">
            <div className="container-sm">
                <div className="row justify-content-center ">
                    <div className="col-lg-10" id="back">
                        <img src={back} className="img-fluid" alt=""></img>
                        <div className="text-center text-light" id="back-text">
                            <h1 className='text-warning'>Hi! There, I am Keshav Joshi</h1>
                            <p className='text-warning'>This is my portfolio website, where you can find all my works and projects</p>
                            <p className='text-warning'>Go ahead and Explore <i className="bi bi-search"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function About(){
    return(
        <section id="intro" className='mt-2'>
            <div class="container-lg">
                <div class="row justify-content-center align-item-center">
                    <div class="col-md-5 text-center text-md-start border border-secondary" style={{backgroundColor: "rgb(214, 213, 213)"}}>
                        <h1>
                            <div class="display-4">Keshav Joshi</div>
                            <div class="lead text-muted"><i class="bi bi-file-earmark-person"></i> A Learner | Developer</div>
                        </h1>
                        <hr />
                        <div class="contact">
                            <p class="lead pt-0">I am currently learning MERN-Stack</p>
                            <span class="lead"><i class="bi bi-envelope-at-fill"></i> How to reach me : 
                                <a href="mailto:itzzkeshav@gmail.com" class="btn btn-sm btn-primary fw-bold">Email</a>
                            </span>
                            <br /><br />
                            <span class="lead"><i class="bi bi-geo-fill"></i> Sri Ganganagar , Rajasthan</span>
                            <br /><br />
                            <span class="lead fw-900"><i class="bi bi-at"></i> Connect with me : </span>
                            <p class="btn-group">
                                <a href="https://www.linkedin.com/in/itzzkeshav/" target="_blank" class="btn btn-sm btn-success fw-bold"><i class="bi bi-linkedin"></i> Linked In</a>
                                <a href="https://github.com/itzzzKeshav" target="_blank" class="btn btn-warning btn-sm fw-bold"><i class="bi bi-github"></i> GitHub</a>
                            </p>

                            <div class="d-block mt-3 btn btn-secondary">
                                Explore more about me<i class="bi bi-chevron-double-right"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 text-center d-none d-md-block">
                        <span class="tt" data-bs-placement="bottom" title="Keshav Joshi">
                            <img src={kk} alt="Image" class="img-fluid border border-secondary align-items-center" />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function Info(){
    return(
        <section id="info" class="bg-light mt-5" style={{padding: "60px 0px"}}>
            <div class="container-lg">
                <div class="text-center">
                    <h2><i class="bi bi-info-circle-fill d-none d-md-inline"></i> Info Check</h2>
                    <p class="lead text-muted">To know more about me and my works</p>
                </div>
                <div class="row my-5 aligh-items-center justify-content-center">
                    <div class="col-8 col-lg-4 col-xl-3">
                        <div class="card border-info border-2">
                            <h4 class="card-header border-info text-center">Web Development</h4>
                            <div class="card-body text-center py-4">
                                <h5 class="card-title">All of my works in this domain</h5>
                                <p class="card-text mx-3 my-1 text-muted d-none d-lg-block">MERN stack is a collection of technologies that enables faster application development.The main purpose of using MERN stack is to develop apps using JavaScript only.</p>
                                <a href="https://github.com/itzzzKeshav?tab=repositories" class="btn btn-outline-danger btn-md mt-3" target="_blank">View</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-8 col-lg-4 col-xl-3">
                        <div class="card border-primary border-2">
                            <h4 class="card-header border-primary text-center">Android</h4>
                            <div class="card-body text-center py-4">
                                <h5 class="card-title">Java Android Projects</h5>
                                <p class="card-text mx-3 my-1 text-muted d-none d-lg-block">Android is a mobile operating system based on a modified version of the Linux kernel and other open-source software, designed primarily for touchscreen mobile devices such as smartphones and tablets.</p>
                                <a href="https://github.com/itzzzKeshav?tab=repositories" class="btn btn-outline-danger btn-md mt-3" target="_blank">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function Upload(){
    return(
        <section id="upload" className='mt-5' style={{backgroundColor: "rgb(240, 238, 238)", height:"650px"}}>
            <div class="container-lg">
                <div class="text-center">
                    <h2><i class="bi bi-stars"></i>Android Projects</h2>
                    <p class="lead text-muted">Android Java Projects</p>
                </div>

                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="list-group">
                            <div class="list-group-item py-3">
                                <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">Flappy Bird
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                    </h5>
                                    <small>May,2022</small>
                                </div>
                                <p class="mb-1">Flappy Bird is a mobile game developed by the Vietnamese video game artist and programmer Dong Nguyen, under his game development company</p>
                                <div class="d-flex justify-content-between">
                                    <small>Difficulty : Easy</small>
                                    <a href="https://github.com/itzzzKeshav/FlappyBird" target="_blank" class="btn btn-outline-success active">View the Code</a>
                                </div>
                            </div>

                            <div class="list-group-item py-3">
                                <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">CryptoStats
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                    </h5>
                                    <small>May.2022</small>
                                </div>
                                <p class="mb-1">A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority</p>
                                <div class="d-flex justify-content-between">
                                    <small>Difficulty : Easy</small>
                                    <a href="https://github.com/itzzzKeshav/CryptoStats" target="_blank" class="btn btn-outline-success active">View the Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function Contact(){
    return(
        <section id="contact" style={{backgroundColor: "rgb(240, 238, 238)"}}>
            <div class="container-lg">
                <div class="text-center">
                    <h2><i class="bi bi-hand-index-thumb-fill"></i> Get in Touch</h2>
                    <p class="lead text-muted">Questions to ask? Fill out the form to contact me directly...</p>
                </div>

                <div class="row justify-content-center my-5">
                    <div class="col-lg-6">
                        <form action="">
                            <label for="email" class="form-label">Email address:</label>
                            <div class="mb-4 input-group">
                                <span class="input-group-text">
                                    <i class="bi bi-envelope-fill"></i>
                                </span>
                                <input type="email" class="form-control" id="email" placeholder="e.g. xyz@gmail.com" required />

                                <span class="input-group-text">
                                    <span class="tt" data-bs-placement="bottom" title="Enter an email address we can reply to">
                                        <i class="bi bi-question-circle text-muted"></i>
                                    </span>
                                </span>
                            </div>

                            <label for="name" class="form-label">Name:</label>
                            <div class="mb-4 input-group">
                                <span class="input-group-text">
                                    <i class="bi bi-person-fill"></i>
                                </span>
                                <input type="text" class="form-control" id="name" placeholder="e.g. Keshav Joshi" required/>

                                <span class="input-group-text">
                                    <span class="tt" data-bs-placement="bottom" title="Pretty self explanatory really...">
                                        <i class="bi bi-question-circle text-muted"></i>
                                    </span>
                                </span>
                            </div>

                            <label for="subject" class="form-label">What is your question about?</label>
                            <div class="input-group mb-4">
                                <span class="input-group-text">
                                    <i class="bi bi-question-circle-fill"></i>
                                </span>
                                <select class="form-select" aria-label="Default select example" id="subject">
                                    <option selected>Open this select menu</option>
                                    <option value="web development">Web Development</option>
                                    <option value="Android">Android</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>

                            <div class="form-floating mb-4">
                                <textarea class="form-control" id="query" rows="5"></textarea>
                                <label for="query" class="form-label">Your query...</label>
                            </div>

                            <div class="mb-4 text-center">
                                <button type="submit" class="btn btn-warning">Submit <i class="bi bi-send-fill"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}


