// import { StatusBar } from "expo-status-bar";
// @ts-nocheck
import { Text } from 'react-native';
// import { useState } from 'react';
import { styled, StyledProvider } from '@dank-style/react';
import { config } from './dank.config';
// import { MyButton1 } from './Button1';
// import { MyButton2 } from './Button2';
// import { MyButton3 } from './Button3';
// import { MyButton4 } from './Button4';
import ButtonComponents from './Button5';

// import { createConfig } from 'dank-style';
// createConfig(config);
// onReady((config) => {
//   console.log(config);
// });

// import MyButton from './styled-components/StyledButton/index';
// import MyButtonText from './styled-components/StyledButton/StyledButtonText';

// import {
//   set as setColorMode,
//   get as getColorMode,
//   onChange,
// } from '@gluestack/color-mode';

// window['setColorMode'] = setColorMode;
// window['getColorMode'] = getColorMode;

// onChange((colorMode) => {
//   //console.log('color mode', colorMode);
//   if (colorMode === 'dark') {
//     document.body.classList.remove('gs-light');
//     document.body.classList.add('gs-dark');
//   } else if (colorMode === 'light') {
//     document.body.classList.remove('gs-dark');
//     document.body.classList.add('gs-light');
//   } else {
//     document.body.classList.remove('gs-light');
//     document.body.classList.remove('gs-dark');
//   }
// });

// const MyButton = styled(
//   Pressable,
//   {
//     baseStyle: {
//       style: {
//         bg: '$green500',
//         p: '$3',
//         shadow: '$4',
//       },

//       colorMode: {
//         dark: {
//           style: {
//             bg: 'aqua',
//           },
//         },
//       },
//       queries: [
//         {
//           condition: '$md',
//           value: {
//             style: {
//               bg: 'blue',
//             },
//             state: {
//               hover: {
//                 style: {
//                   bg: 'aqua',
//                 },
//                 hover: {
//                   style: {
//                     bg: 'red',
//                   },
//                 },

//                 colorMode: {
//                   dark: {
//                     style: {
//                       bg: 'purple',
//                     },
//                   },
//                   light: {
//                     style: {
//                       bg: 'aqua',
//                     },
//                   },
//                 },
//                 state: {
//                   hover: {
//                     style: {
//                       bg: '$yellow500',
//                     },
//                   },
//                 },
//               },
//             },
//           },
//         },
//       ],

//       // state: {
//       //   hover: {
//       //     style: {
//       //       bg: '$green500',
//       //     },
//       //     // state: {
//       //     //   focus: {
//       //     //     style: {
//       //     //       bg: 'purple',
//       //     //     },
//       //     //   },
//       //     // },
//       //   },
//       // },

//       // state: {
//       //   hover: {
//       //     style: {
//       //       bg: 'yellow',
//       //     },

//       //     // hover: {
//       //     //   style: {
//       //     //     bg: 'yellow',
//       //     //   },
//       //     //   hover: {
//       //     //     style: {
//       //     //       bg: 'yellow',
//       //     //     },
//       //     //     hover: {
//       //     //       style: {
//       //     //         bg: 'aqua',
//       //     //       },
//       //     //     },
//       //     //   },
//       //     // },
//       //     descendants: {
//       //       _text: {
//       //         style: {
//       //           color: 'purple',
//       //         },
//       //       },
//       //     },
//       //   },

//       //   active: {
//       //     style: {
//       //       bg: '',
//       //     },
//       //   },
//       // },
//       // descendants: {
//       //   _text: {
//       //     style: {
//       //       color: 'white',
//       //     },
//       //   },
//       // },
//     },
//     // variants: {
//     //   greenBox: {
//     //     style: {
//     //       bg: '$green500',
//     //     },
//     //     state: {
//     //       hover: {
//     //         style: {
//     //           bg: '$green600',
//     //         },
//     //       },
//     //       active: {
//     //         style: {
//     //           bg: '$green700',
//     //         },
//     //       },
//     //     },
//     //     queries: [
//     //       {
//     //         condition: '$md',
//     //         value: {
//     //           style: {
//     //             bg: '$blue500',
//     //           },
//     //           state: {
//     //             hover: {
//     //               style: {
//     //                 bg: '$green500',
//     //               },
//     //               state: {
//     //                 focus: {
//     //                   style: {
//     //                     bg: 'purple',
//     //                   },
//     //                 },
//     //               },
//     //             },
//     //           },
//     //           colorMode: {
//     //             dark: {
//     //               style: {
//     //                 bg: '$red500',
//     //               },
//     //             },
//     //             light: {
//     //               style: {
//     //                 bg: '$blue500',
//     //               },
//     //             },
//     //           },
//     //         },
//     //       },
//     //     ],
//     //   },
//     //   // blueBox: {
//     //   //   style: {
//     //   //     bg: '$yellow500',
//     //   //   },
//     //   //   // colorMode: {
//     //   //   //   dark: {
//     //   //   //     style: {
//     //   //   //       bg: '$yellow100',
//     //   //   //     },
//     //   //   //   },
//     //   //   // },
//     //   //   // state: {
//     //   //   //   hover: {
//     //   //   //     style: {
//     //   //   //       bg: '$yellow600',
//     //   //   //     },
//     //   //   //   },
//     //   //   //   active: {
//     //   //   //     style: {
//     //   //   //       bg: '$yellow700',
//     //   //   //     },
//     //   //   //   },
//     //   //   // },
//     //   // },
//     // },
//     // sizes: {
//     //   // small: {
//     //   //   style: {
//     //   //     p: '$10',
//     //   //   },
//     //   // },
//     //   large: {
//     //     style: {
//     //       px: '$20',
//     //       py: '$10',
//     //     },
//     //     state: {
//     //       hover: {
//     //         style: {
//     //           bg: 'pink',
//     //         },
//     //       },
//     //     },
//     //   },
//     // },
//   },
//   {}
// );

// const MyBox = styled(
//   View,
//   {
//     baseStyle: {
//       style: {
//         bg: '$amber200',
//       },
//     },
//   },
//   {}
// );
const MyButtonText = styled(
  Text,
  { color: '$blue200' },
  { ancestorStyle: ['_text'] }
);

// function Button() {
//   const { pressableProps, isPressed } = useIsPressed();
//   let { isFocused, focusProps } = useFocus();
//   const { isHovered, hoverProps } = useHover();

//   return (
//     <MyButton
//       size="large"
//       colors={['$red400', '$blue400']}
//       // backgroundColor123="red"
//       // colorMode="dark"
//       states={{
//         hover: isHovered,
//         focus: isFocused,
//         active: isPressed,
//       }}
//       sx={{
//         style: {
//           marginBottom: '$4',
//         },
//         // style: {
//         //   backgroundColor: 'pink',
//         // },
//         // state: {
//         //   hover: {
//         //     style: {
//         //       backgroundColor: 'orange',
//         //     },
//         //   },
//         // },
//         descendants: {
//           _text: {
//             style: {
//               color: 'red',
//             },
//             state: {
//               hover: {
//                 style: {
//                   backgroundColor: 'orange',
//                 },
//               },
//             },
//           },
//         },
//       }}
//       // onPressIn={composeEventHandlers(pressableProps.onPressIn)}
//       // onPressOut={composeEventHandlers(pressableProps.onPressOut)}
//       // // @ts-ignore - web only
//       // onHoverIn={composeEventHandlers(hoverProps.onHoverIn)}
//       // // @ts-ignore - web only
//       // onHoverOut={composeEventHandlers(hoverProps.onHoverOut)}
//       // // @ts-ignore - web only
//       // onFocus={composeEventHandlers(composeEventHandlers(focusProps.onFocus))}
//       // // @ts-ignore - web only
//       // onBlur={composeEventHandlers(composeEventHandlers(focusProps.onBlur))}
//       // sx={{
//       //   state: {
//       //     hover: {
//       //       style: {
//       //         bg: "$red.500",
//       //       },
//       //     },
//       //   },
//       // }}
//       // onPress={() => console.log('styled', flush())}
//     >
//       <MyButtonText>Hello World</MyButtonText>
//     </MyButton>
//   );
// }

// console.log(StyledLink, 'styled link here');
// const MyCustomComponent = () => {
//   return (
//     <MyBox>
//       <MyButton>
//         <MyButtonText>Hello World {MyButtonString}</MyButtonText>
//       </MyButton>
//     </MyBox>
//   );
// };
export default function App() {
  // const [state, setState] = useState(true);

  return (
    <>
      <StyledProvider config={config}>
        {/* {Array.from({ length: 1000 }, () => {
          return <MyCustomComponent />;
        })} */}
        {ButtonComponents.map((ButtonComponent, index) => {
          return (
            <ButtonComponent key={index}>
              <MyButtonText>Hello World </MyButtonText>
            </ButtonComponent>
          );
        })}
      </StyledProvider>
    </>
  );
  // return (
  //   // <div>
  //   //   <button onClick={() => setState(!state)}>Show/hide</button>
  //   //   {state ? (
  //   //     <View style={styles.container}>
  //   //       {Array.from({ length: 1 }, () => {
  //   //         return <Button />;
  //   //       })}
  //   //     </View>
  //   //   ) : (
  //   //     Array.from({ length: 1000 }, () => {
  //   //       return (
  //   //         <View>
  //   //           <Text>Hello</Text>
  //   //         </View>
  //   //       );
  //   //     })
  //   //   )}
  //   // </div>
  //   <>
  //     <Image
  //       src={'/'}
  //       style={{ color: 'red' }}
  //       width={100}
  //       height={100}
  //       layout="fill"
  //     />

  //     <StyledProvider config={config}>
  //       <View style={styles.container}>
  //         <Button />
  //         <div />
  //         <Link
  //           href={'/'}
  //           style={{
  //             backgroundColor: 'red',
  //           }}
  //         >
  //           Hello next
  //         </Link>
  //         <StyledLink href={'/'}>Hello 11</StyledLink>
  //         {/* <StyledLink data src={'/'} layout="fill" width={100} height={100} /> */}
  //         {/* <View style={styles.container1}>
  //       <Text>c1</Text>
  //     </View>
  //     <View style={styles.container2}>
  //       <Text>c2</Text>
  //     </View>
  //     <View style={styles.container3}>
  //       <Text>c3</Text>
  //     </View>
  //     <View style={styles.container4}>
  //       <Text>c4</Text>
  //     </View>
  //     <View style={styles.container5}>
  //       <Text>c5</Text>
  //     </View>
  //     <View style={styles.container6}>
  //       <Text>c6</Text>
  //     </View>
  //     <View style={styles.container7}>
  //       <Text>c7</Text>
  //     </View>
  //     <View style={styles.container8}>
  //       <Text>c8</Text>
  //     </View>
  //     <View style={styles.container9}>
  //       <Text>c9</Text>
  //     </View>
  //     <View style={styles.container10}>
  //       <Text>c10</Text>
  //     </View> */}
  //       </View>
  //     </StyledProvider>
  //   </>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 50,
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     // justifyContent: 'center',
//     justifyWrap: 'wrap',
//     flexDirection: 'column',
//   },
//   container1: {
//     width: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//     height: 50,
//     backgroundColor: 'red',

//     shadowColor: 'black',
//     shadowOffset: {
//       width: 0,
//       height: 0,
//     },
//     shadowOpacity: 0,
//     shadowRadius: 0,
//     elevation: 0,
//   },
//   container2: {
//     backgroundColor: 'white',
//     width: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//     height: 50,
//     shadowColor: 'black',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.18,
//     shadowRadius: 1.0,
//     elevation: 1,
//   },
//   container3: {
//     backgroundColor: 'white',
//     width: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//     height: 50,
//     shadowColor: 'black',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 2,
//   },
//   container4: {
//     backgroundColor: 'white',
//     width: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//     height: 50,
//     shadowColor: 'black',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.22,
//     shadowRadius: 2.22,
//     elevation: 3,
//   },
//   container5: {
//     backgroundColor: 'white',
//     width: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//     height: 50,
//     shadowColor: 'black',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.23,
//     shadowRadius: 2.62,
//     elevation: 4,
//   },
//   container6: {
//     backgroundColor: 'white',
//     width: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//     height: 50,
//     shadowColor: 'black',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   container7: {
//     backgroundColor: 'white',
//     width: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//     height: 50,
//     shadowColor: 'black',
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowOpacity: 0.27,
//     shadowRadius: 4.65,
//     elevation: 6,
//   },
//   container8: {
//     backgroundColor: 'white',
//     width: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//     height: 50,
//     shadowColor: 'black',
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowOpacity: 0.29,
//     shadowRadius: 4.65,
//     elevation: 7,
//   },
//   container9: {
//     backgroundColor: 'white',
//     width: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//     height: 50,
//     shadowColor: 'black',
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 4.65,
//     elevation: 8,
//   },
//   container10: {
//     backgroundColor: 'white',
//     width: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//     height: 50,
//     shadowColor: 'black',
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.32,
//     shadowRadius: 5.46,
//     elevation: 9,
//   },
// });
