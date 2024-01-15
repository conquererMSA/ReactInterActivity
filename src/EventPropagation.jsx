function Button({ onSmash, children }) {
    return (
      <button onClick={(e) => {
        e.stopPropagation();
        onSmash();
      }}>
        {children}
      </button>
    );
  }
  
  export default function Toolbar() {
    return (
          <div className="Toolbar" onClick={() => {
         console.log('You clicked on the toolbar!');
      }}>
        <Button onSmash={() =>console.log('Playing!')}>
          Play Movie
        </Button>
        <Button onSmash={() =>console.log('Uploading!')}>
          Upload Image
        </Button>
      </div>
    );
  }
  