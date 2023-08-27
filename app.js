// import Card from "./components/cards/Cards";

const App = () => {
        return <>
            <div id="navbar"><img src="JRweb.png" ></img><h1>&#123;  jack rabbit arts  &#125;</h1></div>
            {/* <div id="ThreeDContainer"></div> */}
            <a href="components/blog/blogs/LanguageFamily/ThreeText.html">ThreeText</a>
            {/* <Card /> */}
        </>;
    };

const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);
root.render(<App />);
    