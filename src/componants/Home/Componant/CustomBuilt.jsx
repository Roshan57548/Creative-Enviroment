import React from "react";
import "./Style/CustomBuilt.css";
import Custombuild from '../../../Image/Home/image1.png'
const CustomBuilt = (props) => {
  return (
    <section className="CustomBuild-0">
      <div className="container ">
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center mini-headstyle">
              <p>{props.data.Heading1}</p>
              <h2>{props.data.Heading2}</h2>
              <div className="inline"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="CustomBuild-1">
        <div className="single-image ">
          <img src="https://www.envisystech.com/themes/envisystech/assets/img/new-imgs19/projects/project1.png" width="360" height="387"/>
          <div className="single-image-hover">
            <div className="single-image-text">
              <h3>
                <span>{props.data.HoverContents[0].Content1}</span>
                {props.data.HoverContents[0].Content2}
              </h3>
              <a href= {props.data.HoverContents[0].Link}aria-label="button">{props.data.HoverContents[0].ProductName}</a>
            </div>
          </div>
        </div>
        <div className="single-image">
          <img src="https://www.envisystech.com/themes/envisystech/assets/img/new-imgs19/projects/project2.png"alt="" width="360" height="387"/>
          <div className="single-image-hover">
            <div className="single-image-text">
              <h3>
                <span>{props.data.HoverContents[1].Content1}</span>
                {props.data.HoverContents[1].Content2}
              </h3>
              <a href={props.data.HoverContents[1].Link} aria-label="button">{props.data.HoverContents[1].ProductName}</a>
            </div>
          </div>
        </div>
        <div className="single-image">
          <img src="https://www.envisystech.com/storage/app/media/inner-products/new-products/latest/home/crush-test-chambers-latest-model-showcase.png"alt="" width="360" height="387"/>
          <div className="single-image-hover">
            <div className="single-image-text">
              <h3>
                <span>{props.data.HoverContents[2].Content1}</span>
                {props.data.HoverContents[2].Content2}
              </h3>
              <a href={props.data.HoverContents[2].Link}aria-label="button">{props.data.HoverContents[2].ProductName}</a>
            </div>
          </div>
        </div>
        <div className="single-image">
          <img src="https://www.envisystech.com/themes/envisystech/assets/img/new-imgs19/projects/project11.png" alt="" width="360" height="387"/>
          <div className="single-image-hover">
            <div className="single-image-text">
              <h3>
                <span>{props.data.HoverContents[3].Content1}</span>
                {props.data.HoverContents[3].Content2}
              </h3>
              <a href={props.data.HoverContents[3].Link}aria-label="button">{props.data.HoverContents[3].ProductName}</a>
            </div>
          </div>
        </div>
        <div className="single-image">
          <img src="https://www.envisystech.com/themes/envisystech/assets/img/new-imgs19/air.png"alt="" width="360" height="387"/>
          <div className="single-image-hover">
            <div className="single-image-text">
              <h3>
                <span>{props.data.HoverContents[4].Content1}</span>
                {props.data.HoverContents[4].Content2}
              </h3>
              <a href={props.data.HoverContents[4].Link}aria-label="button">{props.data.HoverContents[4].ProductName}</a>
            </div>
          </div>
        </div>
        <div className="single-image">
          <img src="https://www.envisystech.com/themes/envisystech/assets/img/new-imgs19/railways.png"alt="" width="360" height="387"/>
          <div className="single-image-hover">
            <div className="single-image-text">
              <h3>
                <span>{props.data.HoverContents[5].Content1}</span>
                {props.data.HoverContents[5].Content2}
              </h3>
              <a href={props.data.HoverContents[5].Link} aria-label="button">{props.data.HoverContents[5].ProductName}</a>
            </div>
          </div>
        </div>
        <div className="single-image">
          <img src="https://www.envisystech.com/storage/app/media/inner-products/new-products/latest/home/cvc-chamber-latest-model-showcase.png" alt="" width="360" height="387"/>
          <div className="single-image-hover">
            <div className="single-image-text">
              <h3>
                <span>{props.data.HoverContents[6].Content1}</span>
                {props.data.HoverContents[6].Content2}
              </h3>
              <a href={props.data.HoverContents[6].Link} aria-label="button">{props.data.HoverContents[6].ProductName}</a>
            </div>
          </div>
        </div>
        <div className="single-image">
          <img src="https://www.envisystech.com/themes/envisystech/assets/img/new-imgs19/projects/drive-in-rain-chamber-project.png"alt="" width="360" height="387" />
          <div className="single-image-hover">
            <div className="single-image-text">
              <h3>
                <span>{props.data.HoverContents[7].Content1}</span>
                {props.data.HoverContents[7].Content2}
              </h3>
              <a href={props.data.HoverContents[7].Link}aria-label="button">{props.data.HoverContents[7].ProductName}</a>
            </div>
          </div>
        </div>
        <div className="single-image">
          <img src="https://www.envisystech.com/storage/app/media/inner-products/new-products/latest/home/isat-chambers-latest-model-showcase.png"alt="" width="360" height="387"/>
          <div className="single-image-hover">
            <div className="single-image-text">
              <h3>
                <span>{props.data.HoverContents[8].Content1}</span>
                {props.data.HoverContents[8].Content2}
              </h3>
              <a href={props.data.HoverContents[8].Link} aria-label="button">{props.data.HoverContents[8].ProductName}</a>
            </div>
          </div>
        </div>
        <div className="single-image">
          <img src="https://www.envisystech.com/themes/envisystech/assets/img/new-imgs19/projects/project10.png"alt="" width="360" height="387"/>
          <div className="single-image-hover">
            <div className="single-image-text">
              <h3>
                <span>{props.data.HoverContents[9].Content1}</span>
                {props.data.HoverContents[9].Content2}
              </h3>
              <a href={props.data.HoverContents[9].Link}aria-label="button">{props.data.HoverContents[9].ProductName}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomBuilt;
