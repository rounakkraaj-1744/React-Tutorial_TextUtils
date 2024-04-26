import Navbar from "../components/Navbar"
import Textarea from "../components/Textarea"
import Alert from "../components/Alert"
import About from "../components/About"
import { useState } from "react"
import { createBrowserRouter, RouterProvider  } from "react-router-dom"

function App(props) {
  //Changing from dark mode to light mode and vice-versa
  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#36454F"
      document.body.style.color = "white"
    } 
    else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
  }

  //Creating a self-destructing alert message
  const [alert, setAlert] = useState(null)

  const displayAlert = (msg) => {
    setAlert({
      message: msg
    })
    setTimeout(() => {
      setAlert(null)
    }, 7000);
  }

  //Routing the pages
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar title="TextUtils" mode={mode} changeMode={toggleMode} /> <Textarea displayAlert={displayAlert} heading="Enter your Text here" mode={mode} changeMode={toggleMode} /> </>
    },
    {
      path: "/about",
      element: <> <Navbar title="TextUtils" mode={mode} changeMode={toggleMode} /> <About /> </>
    }
  ])

  return (
    <RouterProvider router={router}>
      <Alert alert={alert} />
    </RouterProvider>
  )
}

export default App
