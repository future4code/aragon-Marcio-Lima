import { useNavigate } from "react-router-dom"

export default function Header(props) {
    const navigate = useNavigate()

    const logout = () => {
        if (window.confirm("Tem certeza que deseja sair?")) {
            localStorage.removeItem("token")
            localStorage.removeItem("userEmail")
            navigateToLoginPage(navigate)
            alert("Logout realizado com sucesso¹")
        }
    }
    
    return (
        <>
        <h1>LabEddit</h1>
        </>
    )
}