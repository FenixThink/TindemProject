import { partCreator } from "../../../components/applicantPart/applicantPart.js"

const app = document.querySelector('#app')

const applicantPart = partCreator('https://i.ibb.co/PZ5Npww/imgAppl.png','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut excepturi ut debitis a, sit tempore tempora aspernatur quod mollitia quisquam veritatis')

app.appendChild(applicantPart)
/* 
app.appendChild(totalSection) */