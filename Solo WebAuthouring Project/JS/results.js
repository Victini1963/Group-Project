const params = new URLSearchParams(window.location.search);

document.getElementById("firstname").textContent = params.get("firstname");
document.getElementById("lastname").textContent = params.get("lastname");
document.getElementById("gender").textContent = params.get("gender");
document.getElementById("image").textContent = params.get("image");
document.getElementById("backstory").textContent = params.get("backstory");

// personality checkboxes
let personality = [];

if (params.get("personality1")) {
    personality.push(params.get("personality1"));
}

if (params.get("personality2")) {
    personality.push(params.get("personality2"));
}

if (params.get("personality3")) {
    personality.push(params.get("personality3"));
}

document.getElementById("personality").textContent = personality.join(", ");


