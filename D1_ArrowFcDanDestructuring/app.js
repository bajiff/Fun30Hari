// * declarative function 
function sama(nama) {
  console.log(`Halo ${nama}`)
};

// * Arrow Function
const greeting = (name) => console.log(`Halo ${name}`);


const getTheme = ({theme,fontSize,sidebar}) => {
  const data = `Theme ${theme} FontSize: ${fontSize} Sidebar: ${sidebar}`
  console.log(data);
  return data;
};

const settings = {
  "theme":"dark",
  "fontSize":"14px",
  "sidebar":true
};

// * Destructuring
getTheme(settings);

const {theme,fontSize,sidebar} = settings;
console.log(`Ini adalah Temanya : ${theme}, dan ini fontsize: ${fontSize} dan terakhir sidebarnya: ${sidebar}`)