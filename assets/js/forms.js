import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDmX6Xr7-O9V9DF2qnTIKfLxYmJxcyGERY",
    authDomain: "banco-de-dados-a212a.firebaseapp.com",
    projectId: "banco-de-dados-a212a",
    storageBucket: "banco-de-dados-a212a.firebasestorage.app",
    messagingSenderId: "1016922617524",
    appId: "1:1016922617524:web:9a58a7299cc36f1beb09e1",
    measurementId: "G-W9HQ4QWLGJ"
};

// Inicialização do Firebase
let app;
let db;

try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log("Firebase inicializado com sucesso");
} catch (error) {
    console.error("Erro ao inicializar Firebase:", error);
}

// Função para validar o formulário
function validateForm(formData) {
    if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Por favor, preencha todos os campos obrigatórios");
    }
    if (!formData.email.includes('@')) {
        throw new Error("Por favor, insira um email válido");
    }
}

// Manipulador do formulário
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("contact-form");
    const statusDiv = document.getElementById("form-status");

    if (!form) {
        console.error("Formulário não encontrado");
        return;
    }

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        statusDiv.innerHTML = "Enviando mensagem...";
        statusDiv.style.color = "blue";

        try {
            const formData = {
                name: form.querySelector('[name="name"]').value.trim(),
                email: form.querySelector('[name="email"]').value.trim(),
                subject: form.querySelector('[name="subject"]').value.trim(),
                number: form.querySelector('[name="number"]').value.trim(),
                message: form.querySelector('[name="message"]').value.trim(),
                timestamp: new Date().toISOString()
            };

            // Valida os dados antes de enviar
            validateForm(formData);

            const docRef = await addDoc(collection(db, "contatos"), formData);
            console.log("Documento salvo com ID:", docRef.id);
            
            statusDiv.innerHTML = "Mensagem enviada com sucesso!";
            statusDiv.style.color = "green";
            form.reset();

        } catch (error) {
            console.error("Erro ao enviar mensagem:", error);
            statusDiv.innerHTML = error.message || "Erro ao enviar mensagem. Tente novamente.";
            statusDiv.style.color = "red";
        }
    });
});