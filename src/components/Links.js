import user from "../data/user"


function Links({github, linkedin}){
    return(
        <div>
            <h3>Links</h3>
            {<a href = {github}>GitHub</a>}
            {<a href = {linkedin}>Linkedin</a>}
        </div>
    )
}
export default Links