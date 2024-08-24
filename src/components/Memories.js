import React, { Component } from 'react';
import './Memories.css'; 
import { FocusCards } from "../ui/focus-cards";

export default class Memories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Array.from({ length: 6 }), 
    };
    this.scrollRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight
    ) {
      this.loadMoreItems();
    }
  };

  loadMoreItems = () => {
    this.setState((prevState) => ({
      items: [...prevState.items, ...Array.from({ length: 6 })],
    }));
  };

  render() {
    const cards = [
      {
        title: "Forest Adventure",
        src: "memory_1.jpg",
      },
      {
        title: "Valley of life",
        src: "memory_1.jpg",
      },
      {
        title: "Sala behta hi jayega",
        src: "memory_1.jpg",
      },
      {
        title: "Camping is for pros",
        src: "memory_1.jpg", 
      },
      {
        title: "The road not taken",
        src: "memory_1.jpg",
      },
      {
        title: "The First Rule",
        src: "memory_1.jpg",  
      },
    ];

    return (
      <div className="memories-container" ref={this.scrollRef}>
        <img src="mem_lane.jpg" alt="Memory Lane" className="memory-lane-image" />
        <FocusCards cards={cards} />
      </div>
    );
  }
}
// import React, { Component } from 'react';
// import './Memories.css'; 

// import { FocusCards } from "../ui/focus-cards";
// export default class Memories extends Component {
//   // Version with infinite scroll 
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     items: Array.from({ length: 6 }), // Initial 6 items
//   //   };
//   //   this.scrollRef = React.createRef();
//   // }

//   // componentDidMount() {
//   //   window.addEventListener('scroll', this.handleScroll);
//   // }

//   // componentWillUnmount() {
//   //   window.removeEventListener('scroll', this.handleScroll);
//   // }

//   // handleScroll = () => {
//   //   if (
//   //     window.innerHeight + document.documentElement.scrollTop
//   //     === document.documentElement.offsetHeight
//   //   ) {
//   //     this.loadMoreItems();
//   //   }
//   // };

//   // loadMoreItems = () => {
//   //   this.setState((prevState) => ({
//   //     items: [...prevState.items, ...Array.from({ length: 6 })],
  
//     const cards = [
//       {
//         title: "Forest Adventure",
//         src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       },
//       {
//         title: "Valley of life",
//         src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       },
//       {
//         title: "Sala behta hi jayega",
//         src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       },
//       {
//         title: "Camping is for pros",
//         src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       },
//       {
//         title: "The road not taken",
//         src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       },
//       {
//         title: "The First Rule",
//         src: "https://assets.aceternity.com/the-first-rule.png",
//       },
//     ];
//   //   }));
//   // };

//   render() {
//     return (
//       <div className="memories-container" ref={this.scrollRef}>
//         <img src="mem_lane.jpg" alt="Memory Lane" className="memory-lane-image" />
//         <FocusCards cards={cards} 

//   />;
// }

//           ))}
//         </div>
        
        
//         </div>
//         );
//       }
//     }
    
    /* <div className="card-container">
      {this.state.items.map((_, index) => (
        <div className="card" key={index}>
          <img src={`image_${index % 6 + 1}.jpg`} className="card-img-top" alt={`Card ${index + 1}`} />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div> */
    // import React, { Component } from 'react';
    // import './Memories.css'; // Ensure to create this file for custom styling
    
    // export default class Memories extends Component {
      //   render() {
        //     const images = [
          //       'cake_1.jpg', 'image_2.jpg', 'image_3.jpg',
          //       'cake_2.jpg', 'image_5.jpg', 'image_6.jpg'
          //     ]; // Replace these with actual image paths

//     return (
//       <div className="memories-container">
//         <img src="mem_lane.jpg" alt="Memory Lane" className="memory-lane-image" />
//         <div className="card-container">
//           {images.map((image, index) => (
//             <div className="card" key={index}>
//               <img src={image} className="card-img-top" alt={`Card ${index + 1}`} />
//               <div className="card-body">
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
