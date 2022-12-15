import { partCreator } from "../../../components/applicantPart/applicantPart.js"

const app = document.querySelector('#app')

const applicantPart = partCreator('https://i.ibb.co/PZ5Npww/imgAppl.png','Como aspirante','Lorem ipsum is simply dummy text of the printing and typesetting industry.')

app.appendChild(applicantPart)
/* 
app.appendChild(totalSection) */