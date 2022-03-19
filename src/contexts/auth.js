import { useEffect, useState, createContext } from 'react';
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        function loadStorage() {
            const storageUser = localStorage.getItem('DesafioBemPaggo');

            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false)
            }
            setLoading(false)
        }

        loadStorage();
    }, [])

    async function signUp(email, senha, nome) {
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(async (value) => {
                let uid = value.user.uid;

                await firebase.firestore().collection('usuarios')
                    .doc(uid).set({
                        nome: nome,
                        
                    })
                    .then(() => {
                        let data = {
                            uid: uid,
                            nome: nome,
                            email: value.user.email,
                        }
                        setUser(data);
                        storageUser(data);
                        setLoadingAuth(false);
                        //toast.success('Bem-vindo a plataforma');
                    })
            })
            .catch((error) => {
                console.log(error);
                //toast.error('ops...Algo deu errado!!!');
                setLoadingAuth(false);
            })
    }

    function storageUser(data) {
        localStorage.setItem('DesafioBemPaggo', JSON.stringify(data))
    }

    async function signOut() {
        await firebase.auth().signOut();
        localStorage.removeItem('DesafioBemPaggo');
        setUser(null);
        //toast.success('Até breve!');
    }

    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                loading,
                signUp,
                signOut,
            }}>
            {children}
        </AuthContext.Provider >
    )
}