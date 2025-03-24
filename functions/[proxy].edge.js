export default function handler(request, context) {
    console.log("hello from edge");
   return fetch(request)
 }
