console.log('started');

const d="Shreyas";
const h1Element=<h1>hello {d}</h1>;

const mobiles=["one+","apple","samsung","realme","redmi"];

const loopongData=mobiles.map((value) => {
    return <h1>{value}</h1>;
});

const ulElement = (
    <ul>
        {mobiles.map((value)=>{
            return <li>{value}</li>;
        })}
    </ul>
);

const allItems = React.createElement(
    "div",
    null,
    ulElement,
    loopongData,
    h1Element
);

ReactDOM.render(h1Element,document.getElementById("container"))