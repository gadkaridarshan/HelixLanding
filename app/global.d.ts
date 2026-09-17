// @helix:story [USER-277000]
declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}