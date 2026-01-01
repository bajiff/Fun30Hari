const getTheme = ({theme,fontSize,sidebar}) => {
  console.log(`Theme: ${theme}\nFont Size: ${fontSize}\nSidebar: ${sidebar} `)
}
const settings = {
  "theme":"dark",
  "fontSize":"14px",
  "sidebar":true
};

getTheme(settings);