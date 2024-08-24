import React, { Component } from 'react';
import { BackgroundGradientAnimation } from 'src/ui/background-gradient-animation';
// Error in centering used 
// "use client";
// import React from "react";
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

// export function Home() {
//   return (
//     <CardContainer className="inter-var w-full">
//       <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-full h-[25rem] rounded-xl p-4 border  ">
//         <CardItem
//           translateZ="50"
//           className="text-xl font-bold text-neutral-600 dark:text-white"
//         >
//           Make things float in air
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//         >
//           Hover over this card to unleash the power of CSS perspective
//         </CardItem>
//         <CardItem
//           translateZ="100"
//           rotateX={20}
//           rotateZ={-10}
//           className="w-full mt-4"
//         >
//           <img
//             src="cake_1.jpg"
//             height="100"
//             width="50"
//             className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="thumbnail"
//           />
//         </CardItem>
        
        
//       </CardBody>
//     </CardContainer>
//   );
// }
    import {GlassyContainer} from './GlassyContainer';
    import { Cards } from './Cards'; 
    export default class Home extends Component {
        // componentDidMount() {
        //     // Wait for the curtains to fully open before showing the message
        //     setTimeout(() => {
        //         document.getElementById('box').style.opacity = 1;
        //     }, 1000); // Delay should match the duration of the curtain transition
        // }

        render() {
            return (
                <>

            {/* <BackgroundGradientAnimation/> */}
                <GlassyContainer/>
                <Cards/>
                </>
            );
        }
    }
