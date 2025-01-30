import Nav from './navigation/Nav'
import Rectangle from './Rectangle'
import Container from './Container'
export default function Header() {
  return (
    <div className="header">
        <Nav />
        <Container />
        <Rectangle />
    </div>
  )
}
