import User from '../models/User.model.js';
import jwt from "jsonwebtoken";
import { encrypt, compare } from "../helpers/Bcrypt.helper.js";

class UserController {

    static createUser = async (req, response) => {
        // const dataUser = new User(req.body);
        // const res = await dataUser.createUser()
        // return response.json({'message': res})

        try {
            const dataUser = new User(req.body);
            const res = await dataUser.create()
            if (res.affectedRows > 0) {
                return response.status(202).json({ 'message': 'se guardo correctamente' })

            }

            // return response.status(202).json({'message': res})
        } catch (error) {
            return response.send({
                "status": 404,
                "message": error.message

            })
        }
    }

    static getAll = async (req, res) => {
        try {
            const respuesta = await User.All()
            if (respuesta.length === 0) {
                return { 'message': 'users not found' }
            }
            return (respuesta);
        } catch (error) {
            return {
                "status": 404,
                "message": error.message
            }

        }
    }
    static emailCompanies = async (req,res)=>{
    try {
        const answer = await User.AllEmailCompany(req.params.id)
        res.status(200).json({message:answer})
        return;
    }catch(error){
        res.status(500).json({
            "message":error.message
        })

        }
    }

    static emailApplicant = async (req, res) => {
        try {
            const answer = await User.AllEmailApplicant(req.params.id)
            res.status(200).json({message:answer})
            return;
        }catch(error){
            res.status(500).json({
                "message": error.message
            })

        }
    }

    static validateToken = async (req, res) => {
        try {
            const token = req.body.token
            const respuesta = await User.validationToken(token)
            return res.status(200).json({ 'message': respuesta })
        } catch (error) {
            return res.status(500).json({
                "message": error.message
            })

        }
    }

    static getfindOne = async (req, res) => {
        try {

            const answer = await User.FindOne(req.params.id)
            if (answer.length === 0) {
                return res.status(404).json({ 'message': 'user not found' })
            }
            res.send(answer)

        } catch (error) {
            return res.send({
                "status": 404,
                "message": error.message
            })

        }
    }

    static generateAccessToken(user) {
        return jwt.sign(user, process.env.SECRET, { expiresIn: '120m' })
    }





    static auth = async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = new User(email, password);

            const query = await this.getAll();

            let status = false

            query.forEach(async (e) => {

                const checkPassword = await compare(password, e.password)

                if (e.email === email && checkPassword == true) {
                    status = true


                    if (status) {

                        const [query2] = await user.searchType(email);


                        if (query2 === undefined) {
                            return res.status(404).json({
                                message: 'user not Found'

                            });

                        }
                        const [id] = await user.searchId(query2.type, email);
                        const User = { id: id.id, email: email, rol: query2.type };
                        const accessToken = this.generateAccessToken(User);

                        res.status(200).header('autorization', accessToken).json({
                            message: 'user atutenticado',
                            token: accessToken

                        });
                        return;
                    }
                }
            })
        } catch (error) {
            return res.status(500).json({
                message: false
            })
        }
    }

    static userUpdate = async (req, res) => {
        try {
            const{email,password} = req.body;
            const res = await User.update(email,password, req.params.id);
            return res.send({
                "status" : 200,
                "message":"User update succefully"
            })
        } catch (error) {
            return res.send({
                "status": 404,
                "message": error.message
            })
        }
    }

    static hasheado = async (req, res) => {
        try {
            const { answer } = req.body

            const password = await encrypt(answer)

            return res.send({
                "status": 200,
                "message": password
            })

        } catch (error) {
            return res.send({
                "status": 404,
                "message": error.message
            })

        }
    }
    static updateMatch = async (req,res)=>{
        try {
            const query = await User.updateMatch(req.params);
            res.status(200).json({
                "message":"Procedimiento almacenado bien"
            });
            return;
        } catch (error) {
            res.status(200).json({
                "message":error
            });
            return;
        }
    }
    static validateMatch = async (req,res)=>{
        try {
            const query = await User.validateMatch(req.params);
            res.status(200).json({
                "message":query
            });
            return;
        } catch (error) {
            res.status(200).json({
                "message":error
            });
            return;
        }
    }


}

export default UserController;