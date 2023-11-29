import React, {useState} from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

import { auth } from "../firebase.config";
import { storage } from "../firebase.config";
import { toast } from "react-toastify";
import { db } from "../firebase.config";

import "../styles/login.css"
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    
    const signup = async(e) => {
        e.preventDefault()
        setLoading(true)

        try {

            const userCredential = await createUserWithEmailAndPassword(auth,
                email, password);
            
            const user = userCredential.user;

            const storageRef = ref(storage, `images/${Date.now() + username}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            
            uploadTask.on((error) => {
                toast.error(error.message)
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    // update user profile
                   await updateProfile(user, {
                        displayName: username,
                        photoURL: downloadURL,
                    });

                    //store user data in firestore darabase
                    await setDoc(doc(db, "users", user.uid), {
                        uid: user.uid,
                        displayName: username,
                        email,
                        photoURL: downloadURL,
                    });
                });
            });
            
            setLoading(false)
            toast.success("Обліковий запис створено")
            navigate("/login")

        } catch (error) {
            setLoading(false)
            toast.error("Щось пішло не так")
        }
    };

    return (
        <Helmet title="Signup">
            <section>
                <Container>
                    <Row>
                        {
                            loading ? <Col lg="12" className="text-center">
                                <h5 className="fw-bold">Завантаження......</h5></Col> :
                                 <Col lg="6" className="m-auto text-center">
                            <h3 className="fw-bold mb-4">Реєстрація</h3>

                            <Form className="auth__form" onSubmit={signup}>
                                <FormGroup className="form__group">
                                    <input type="tetx" placeholder="Ім'я користувача"
                                    value={username} onChange={(e)=> setUsername(e.target.value)} />
                                </FormGroup>
                  
                                <FormGroup className="form__group">
                                    <input type="email" placeholder="Введіть адресу електронної пошти"
                                    value={email} onChange={(e)=> setEmail(e.target.value)} />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="password" placeholder="Введіть ваш пароль"
                                    value={password} onChange={(e)=> setPassword(e.target.value)}/>
                                </FormGroup>
                  
                                <FormGroup className="form__group">
                                    <input type="file"
                                     onChange={(e) => setFile(e.target.files[0])} />
                                </FormGroup>

                                <button type="sumbit" className="buy__bin auth__btn">Створити аккаунт</button>
                                <p>Вже є аккаунт? <Link to="/login">Увійти</Link></p>
                            </Form>   
                        </Col>
                       }
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Signup;