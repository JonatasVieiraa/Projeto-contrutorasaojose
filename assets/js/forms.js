var form = document.getElementById("contact-form");
    
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.createElement("p");
    status.style.marginTop = "1rem";
    form.appendChild(status);

    var data = new FormData(event.target);
    try {
        var response = await fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            status.innerHTML = "Obrigado pelo seu contato!";
            form.reset();
        } else {
            var data = await response.json();
            if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
            } else {
                status.innerHTML = "Oops! Houve um problema ao enviar o formulário.";
            }
        }
    } catch (error) {
        status.innerHTML = "Oops! Houve um problema ao enviar o formulário.";
    }
}

form.addEventListener("submit", handleSubmit);