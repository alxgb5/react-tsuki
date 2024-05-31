// import React from "react";
// import { useGet, usePost, useDelete, usePut, usePatch } from "react-tsuki/hooks";

// const MyComponent: React.FC = () => {
//   const {
//     data: getData,
//     loading: getLoading,
//     error: getError,
//   } = useGet("https://api.example.com/get");
//   const {
//     postData,
//     response: postResponse,
//     loading: postLoading,
//     error: postError,
//   } = usePost("https://api.example.com/post");
//   const {
//     deleteData,
//     response: deleteResponse,
//     loading: deleteLoading,
//     error: deleteError,
//   } = useDelete("https://api.example.com/delete");
//   const {
//     putData,
//     response: putResponse,
//     loading: putLoading,
//     error: putError,
//   } = usePut("https://api.example.com/put");
//   const {
//     patchData,
//     response: patchResponse,
//     loading: patchLoading,
//     error: patchError,
//   } = usePatch("https://api.example.com/patch");

//   const handlePost = () => {
//     postData({ name: "example" });
//   };

//   const handleDelete = () => {
//     deleteData();
//   };

//   const handlePut = () => {
//     putData({ id: 1, name: "updated example" });
//   };

//   const handlePatch = () => {
//     patchData({ name: "partially updated example" });
//   };

//   return (
//     <div>
//       {/* Render your data here */}
//       <button onClick={handlePost}>Send POST</button>
//       <button onClick={handleDelete}>Send DELETE</button>
//       <button onClick={handlePut}>Send PUT</button>
//       <button onClick={handlePatch}>Send PATCH</button>
//     </div>
//   );
// };

// export default MyComponent;
