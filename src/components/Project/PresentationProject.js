import { nanoid } from "nanoid";
import React from "react";
import Image from "../../UI/Image";
import { Link, Navigate, useNavigate } from "react-router-dom";

class PresentationProject extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.id;
    this.title = this.props.title;
    this.img = this.props.img;
    this.shortDesc = this.props.shortDesc;
    this.langages = this.props.langages;
    this.state = { navigate: null };
  }

  NavigationFunction() {
    this.setState({ navigate: true });
  }

  render() {
    return (
      <Link to={"/project/" + this.id}>
        <div className="border border-neutral-600 relative rounded-xl h-full">
          {/* {this.state.navigate && <Navigate to={"/project/" + this.id} />} */}
          <div className="rounded-xl absolute inset-0 flex flex-wrap items-center justify-center gap-6 px-6 bg-black bg-opacity-80 transition duration-300 opacity-0 hover:opacity-100 hover:cursor-pointer content-center">
            {this.langages &&
              this.langages.map((langage, i) => {
                return (
                  <Image
                    key={nanoid()}
                    title={langage.title}
                    img={process.env.PUBLIC_URL + "/stack/" + langage.img}
                    background={langage.background}
                  />
                );
              })}
          </div>
          <div className="h-full flex flex-col">
            <img
              src={process.env.PUBLIC_URL + "/project/" + this.img}
              className="aspect-video rounded-t-xl border-b-2 border-neutral-600"
            />
            <div className="py-4 px-5 h-full flex flex-col items-center justify-center ">
              <p className=" text-center text-xl">{this.title}</p>
              <p className=" text-center text-base mt-4">{this.shortDesc}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default PresentationProject;
