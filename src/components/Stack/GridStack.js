import React from "react";
import Langage from "./Langage";
import { nanoid } from "nanoid";

class GridStack extends React.Component {
  constructor(props) {
    super(props);
    this.category = this.props.category;
    this.langages = this.props.langages;
    this.firstDiv_GridColSpan =
      "flex p-6 flex-col backdrop-blur-md bg-black/40 hover:bg-black/60 duration-300 border-transparent border-2 hover:border-slate-600 rounded-lg relative";
    this.secondDiv_GridNbElement =
      "grid grid-flow-row gap-y-4 gap-x-1 items-center my-auto";
    this.state = {
      langagesLength: null,
      grid_nb_elements: null,
      grid_col_span: null,
      isLoaded: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ langagesLength: this.langages.length });
    this.addStyleToComponent();
  };

  addStyleToComponent = () => {
    var gridColNumber = null;
    var gridColSpan = null;

    if (this.langages.length === 6) {
      gridColNumber =
        "grid-cols-" +
        Math.floor(this.langages.length / 2).toString() +
        " sm:grid-cols-" +
        this.langages.length.toString();
      gridColSpan = "col-span-1 sm:col-span-2";
    } else if (this.langages.length >= 7 && this.langages.length <= 8) {
      gridColNumber = "grid-cols-3 sm:grid-cols-4";
      gridColSpan = "col-span-1 sm:col-span-2";
    } else if (this.langages.length === 5) {
      gridColNumber = "grid-cols-3";
      gridColSpan = "col-span-1";
    } else if (this.langages.length === 1) {
      gridColNumber = "grid-cols-1";
      gridColSpan = "col-span-1";
    } else {
      gridColNumber = "grid-cols-2";
      gridColSpan = "col-span-1";
    }

    this.setState(
      { grid_col_span: this.firstDiv_GridColSpan + " " + gridColSpan },
      function () {
        this.setState(
          {
            grid_nb_elements:
              this.secondDiv_GridNbElement + " " + gridColNumber,
          },
          function () {
            this.setState({ isLoaded: true });
          }
        );
      }
    );
  };

  render() {
    return (
      <>
        {this.state.isLoaded && (
          <div className={this.state.grid_col_span}>
            <div className={this.state.grid_nb_elements}>
              {this.langages.map((langage) => {
                return (
                  <Langage
                    key={nanoid()}
                    name={langage.name}
                    img={langage.img}
                    background={langage.background}
                  />
                );
              })}
            </div>
            <p className="text-2xl underline mt-auto pt-3">{this.category}</p>
          </div>
        )}
      </>
    );
  }
}

export default GridStack;
