import dataStudents from "./dataStudents.js";

// const filterKelas = dataStudents.filter((student) => student.kelas === "A");
// // console.log(filterKelas);

// const mapKelas = dataStudents.map((student) => student.name);
// // console.log(mapKelas);
// const cariKelas = (kelas = "A") => {
//   const data = dataStudents.filter(student => student.kelas === kelas)
//   .map(student => student.name);
//   console.log(data);
//   return data;
// };

// cariKelas("B");
// // cariKelas("C");
// // cariKelas("D");

const getAPI = async () => {
try  {
    const api = await fetch("https://dogapi.dog/api/v2/breeds")
    const json = await api.json();

    console.log(json);

    return json;
  } catch (error) {
    console.error(error)
  };
};

getAPI();

// const datAPI = getAPI().then(response => {
//   response.data.forEach(data => {
//     console.log(data.attributes);
//     return data.attributes.description 
//   });
// })
// console.log(typeof datAPI);