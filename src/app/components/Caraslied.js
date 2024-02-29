
// import { Carousel, Card, Stack, Button } from "react-bootstrap";
// export default function Caraslied() {
//   const reviews = [
//     { _id: 1, text: "abc" },
//     { _id: 2, text: "def" },
//     { _id: 3, text: "ghi" },
//     { _id: 4, text: "jkl" },
//     { _id: 5, text: "mno" },
//     { _id: 6, text: "pqr" },
//     { _id: 7, text: "stu" },
//     { _id: 8, text: "vwx" },
//     { _id: 9, text: "yza" }
//   ];

//   return (
//     <div>
//       <h1 className="text-center fw-bold my-5">
//         User Reviews ({reviews.length})
//       </h1>
//       <div className="bg-dark bg-opacity-25 container-fluid">
//         <Carousel style={{ height: 500 }}>
//           {reviews.map((review) => (
//             <Carousel.Item key={review._id} style={{ height: 500 }}>
//               <Stack
//                 direction="horizontal"
//                 className="h-100 justify-content-center align-items-center"
//                 gap={3}
//               >
//                 {reviews.map((review) => (
//                   <Card key={review._id} style={{ width: "18rem" }}>
//                     <Card.Body>
//                       <Card.Title>Card Title</Card.Title>
//                       <Card.Text>{review.text}</Card.Text>
//                       <Button variant="primary">Go somewhere</Button>
//                     </Card.Body>
//                   </Card>
//                 ))}
//               </Stack>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// }
