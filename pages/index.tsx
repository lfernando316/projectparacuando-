import Link from 'next/link';
export default function Home() {
  return (
    <>
      <h1> aplicacion para cuando ?</h1>
      <ul>
        RUTAS
        <li>
          <Link href="./detalle">detalle</Link>
        </li>
        <li>
          <Link href="./crearPublicacion">crear publicacion</Link>
        </li>
        <li>
          <Link href="./login">login</Link>
        </li>
        <li>
          <Link href="./signUp">sign Up</Link>
        </li>
        <li>
          <Link href="./marcas">marcas</Link>
        </li>
        <li>
          <Link href="./perfil">perfil</Link>
        </li>
      </ul>
    </>
  );
}