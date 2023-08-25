
const App = () => {
        return <div>Hello, React with JSX via CDN and Babel!</div>;
    };

const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);
root.render(<App />);
    