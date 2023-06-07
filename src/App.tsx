import { Stack, Form, Button, Alert, Nav, Navbar, Container, NavDropdown, Offcanvas } from "react-bootstrap"
import { useState, useEffect, useRef } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello People</h1>
      <p className="read-the-docs">
        This site is under construction, Check back later!
      </p>
    </>
  )
}